<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h3><font-awesome-icon icon="eye" />&nbsp;View Product</h3></div>
                <div class="card-body">
                    <div class='form-group'>
                        <label htmlFor='product_name'>Product Name</label>
                        <input type="textfield" class="form-control" id="product_name" v-model="form.product_name" disabled>
                    </div>
                    <div class='form-group'>
                        <label htmlFor='product_price'>Product Price</label>
                        <input type="textfield" class="form-control" id="product_price" v-model="form.product_price" disabled>
                    </div>
                </div>
                <div class="card-footer">
                    <router-link :to="{ name: 'product-list' }" class="btn btn-secondary" title="Back"><font-awesome-icon icon="arrow-alt-circle-left" />&nbsp;Back</router-link>
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
        }
    }
</script>