<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="list" />&nbsp;Home</h3></div>
                    <div class="card-body">
  <div class="box-body" style="font-style: Calibri;font-size:12px">
      <v-client-table 
          :data="tableData"
          :columns="columns" 
          :options="options">

        <span slot="action" slot-scope="{tableData}"> 
            <button v-on:click="view(tableData.id)"><font-awesome-icon icon="eye" /></button>
            <button v-on:click="edit(tableData.id)" style="margin-left:10px;" ><font-awesome-icon icon="edit" /></button>
            <button v-on:click="delete(tableData.id)" style="margin-left:10px;" ><font-awesome-icon icon="trash" /></button>
        </span>

      </v-client-table>
  </div>


                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
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
        }
 

    }
</script>
<style>
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