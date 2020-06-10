<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="home" />&nbsp;Home</h3></div>
                    <div class="card-body">
                        <DataTable 
                            :showRecords="showRecords" 
                            :repositories="repositories" 
                        />
                        <!-- Pagination -->
                        <div class="my-4">
                            <ul class="pagination pagination-md justify-content-center text-center">
                                <li  class="page-item"
                                    :class="page === 1 ? 'disabled' : ''"
                                >
                                    <a 
                                        class="page-link" 
                                        @click="prevPage" 
                                    >
                                        Previous
                                   </a>
                                </li>
                                <li class="page-link" style="background-color: inherit"> 
                                    {{ page }} of {{ lastPage }}
                                </li>
                                <li  class="page-item" 
                                    :class="page === lastPage ? 'disabled' : ''"
                                >
                                    <a class="page-link" 
                                      @click="nextPage"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--./Pagination -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
    import '../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';

    import DataTable  from './DataTable';

    import axios from 'axios';
    const githubAPI = 'http://localhost:8000/api/products_page?page='

    export default {
        name: 'home',
        components: {
            DataTable
        },
        data () {
            return {
                githubPage: 1,
                repositories: [],
                page: 1,
                loading: false,
                perPage: 20

            }
        },
        mounted () {
            this.fetchData()
        }, 
        computed: {
            showRecords () {
                let start = (this.page - 1) * this.perPage
                let end = start + this.perPage
                //this.loading = false
                return this.repositories.slice(start, end)
            },
        },
        methods: {
            fetchData () {
                axios.get(githubAPI + this.githubPage)
                .then(({data}) => {
                    this.repositories = this.repositories.concat(data.items)
                 })
                .catch((err) => {
                  console.log(err)
                })    
            },

            prevPage () {
                this.loading = true
                this.page--
            },
            nextPage () {
                this.loading = true
                this.page++
            },
        }
    }
</script>

<style scoped>
    a:hover {
     cursor: pointer;
    }
</style>