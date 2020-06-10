<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-edit"></i>&nbsp;Edit Product</h3></div>
                <div class="card-body">
                    <div class="alert alert-danger" v-if="errors.length">
                        <b>Terdapat kesalahan dalam input data:</b>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <form @submit.prevent="updateRecord()">
                        <div class='form-group'>
                            <label htmlFor='product_name'>Product Name</label>
                            <input type="textfield" class="form-control" id="product_name" v-model="form.product_name" required>
                        </div>
                        <div class='form-group'>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type="textfield" class="form-control" id="product_price" v-model="form.product_price" required>
                        </div>
                        <div class='form-group'>
                            <router-link :to="{ name: 'product-list' }" class="btn btn-secondary" title="Back"><i class="fas fa-arrow-alt-circle-left"></i>&nbsp;Back</router-link>
                            &nbsp;
                            &nbsp;
                            <button class="btn btn-primary" title="Update Record"><i class="fas fa-save"></i>&nbsp;Update</button>
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
                .then((response) => {
                    this.$router.push("product-list");
                });


            },
        },
    };
</script>