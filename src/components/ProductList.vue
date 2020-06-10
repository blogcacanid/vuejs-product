<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="list" />&nbsp;Product List</h3></div>
                    <div class="card-body"  style="font-style: Calibri;font-size:12px">
                        <router-link :to="{name: 'product-add'}" class='btn btn-success mb-3' title="Add New Record">
                            <font-awesome-icon icon="plus-circle" />&nbsp;Add Record
                        </router-link>
                        <v-client-table 
                            :data="tableData"
                            :columns="columns" 
                            :options="options">
                            <span slot="action" slot-scope="{ row }">
                                <button @click="$router.push({name: 'product-view', params: { id: row.id },})"><font-awesome-icon icon="eye" /></button>
                                <button @click="$router.push({name: 'product-edit', params: { id: row.id },})" style="margin-left:10px;" ><font-awesome-icon icon="edit" /></button>
                                <button @click="$router.push({name: 'product-delete', params: { id: row.id },})" style="margin-left:10px;" ><font-awesome-icon icon="trash" /></button>
                            </span>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns: ['action', 'id', 'product_name', 'product_price'],
                tableData: [],
                options: {
                    filterByColumn: true,
                    headings: {
                        action: 'Action',
                        id: 'ID',
                        product_name: 'Product Name',
                        product_price: 'Price'
                    },
                    sortable: ['product_name', 'product_price'],
                    filterable: ['product_name', 'product_price']
                }
            }
        },
        mounted() {
            this.axios.get('http://localhost:8000/api/products/').then(res => {
                this.tableData = res.data
            })
        },
    }
</script>
<style scoped>
    tr td:nth-child(1) {
        width: 90px;
    }
    tr td:nth-child(2) {
        width: 50px;
    }
    tr td:nth-child(4) {
        width: 150px;
    }
</style>