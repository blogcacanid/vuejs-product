import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ClientTable } from 'vue-tables-2';

library.add(faHome, faInfoCircle, faAddressCard, faArrowAltCircleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.use(ClientTable);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')