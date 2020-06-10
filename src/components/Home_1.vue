<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header"><h3><font-awesome-icon icon="home" />&nbsp;Home</h3></div>
                    <div class="card-body">

                        <DataTable :repositories="repositories" />

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
            repositories: []
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
        }
    }





}

</script>