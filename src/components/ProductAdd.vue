<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h3><font-awesome-icon icon="plus-circle" />&nbsp;Add Product</h3></div>
                <div class="card-body">
                    <div class="alert alert-danger" v-if="errors.length">
                        <b>Terdapat kesalahan dalam input data:</b>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                    <form @submit.prevent="addRecord">
                        <div class='form-group'>
                            <label htmlFor='product_name'>Product Name</label>
                            <input type="text" class="form-control" id="product_name" v-model="product.product_name" placeholder="Please enter product name">
                        </div>
                        <div class='form-group'>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type="text" class="form-control" id="product_price" v-model="product.product_price" placeholder="Please enter product price">
                        </div>
                        <div class='form-group'>
                            <router-link :to="{ name: 'product-list' }" class="btn btn-secondary" title="Back"><font-awesome-icon icon="arrow-alt-circle-left" />&nbsp;Back</router-link>
                            &nbsp;
                            &nbsp;
                            <button class="btn btn-success" title="Save Record"><font-awesome-icon icon="save" />&nbsp;Save</button>
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
                product:{},
                errors: [],
                product_name: null,
                product_price: null,
            }
        },
        methods: {
            /* eslint-disable */
            addRecord(e){
                if (this.$data.product.product_name != null && this.$data.product.product_price != null) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Product created successfully",
                        icon: 'success',
                        timer: 1000
                    })
                    let uri = 'http://localhost:8000/api/products';
                    this.axios
                    .post(uri, this.product).then((response) => {
                        this.$router.push({name: 'product-list'});
                    });
                    return true;
                }
                this.errors = [];
                if (!this.product_name) {
                    this.errors.push('Product name wajib diisi !');
                }
                if (!this.product_price) {
                    this.errors.push('Product price wajib diisi !');
                }
                e.preventDefault();
            }
            /* eslint-enable */ 
        }
    }
</script>