<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h3><font-awesome-icon icon="edit" />&nbsp;Edit Product</h3></div>
                <div class="card-body">
                    <form @submit.prevent="updateRecord()">
                        <div class='form-group'>
                            <label htmlFor='product_name'>Product Name</label>
                            <input type="textfield" class="form-control" v-model="form.product_name" required>
                        </div>
                        <div class='form-group'>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type="textfield" class="form-control" v-model="form.product_price" required>
                        </div>
                        <div class='form-group'>
                            <router-link :to="{ name: 'product-list' }" class="btn btn-secondary" title="Back"><font-awesome-icon icon="arrow-alt-circle-left" />&nbsp;Back</router-link>
                            &nbsp;
                            &nbsp;
                            <button class="btn btn-primary" title="Update Record"><font-awesome-icon icon="save" />&nbsp;Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                errors: [],
                form:{
                    product_name: null,
                    product_price: null
                }
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            loadData() {
                // load data berdasarkan id
                this.axios
                .get("http://localhost:8000/api/product/" + this.$route.params.id)
                .then(response => {
                    // post value yang dari response ke form
                    this.form.product_name = response.data.product_name;
                    this.form.product_price = response.data.product_price;
                });
            },
            /* eslint-disable */
            updateRecord() {
                this.$swal.fire({
                    title: 'Success',
                    text: "Product updated successfully",
                    icon: 'success',
                    timer: 1000
                });
                this.axios
                .put("http://localhost:8000/api/products/" + this.$route.params.id, {
                    product_name: this.form.product_name,
                    product_price: this.form.product_price
                })
                .then(response => {
                    this.$router.push({name: 'product-list'});
                });
            },
            /* eslint-enable */ 
        },
    };
</script>