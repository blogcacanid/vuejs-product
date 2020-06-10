<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="home" />&nbsp;Home</h3></div>
                    <div class="card-body">

                        <DataTable :repositories="repositories" />

 <div class="my-4"> <!-- Pagination -->
   <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item">
          <a class="page-link" @click="prevPage">Previous</a>
        </li>
        <li class="page-link" style="background-color: inherit">
            1 of 5
        </li>
        <li class="page-item">
          <a class="page-link" @click="nextPage">Next</a>
        </li>
      </ul>
 </div><!--./Pagination -->


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
const githubAPI = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page='

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
            loading: false

        }
    },


 
    mounted () {
        this.fetchData()
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
        },nextPage () {
            this.loading = true
            this.page++
        }


    }





}

</script>