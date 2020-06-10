import ProductList from './components/ProductList.vue'
import ProductAdd from './components/ProductAdd.vue';
import ProductView from './components/ProductView.vue';
import ProductEdit from './components/ProductEdit.vue';
import ProductDelete from './components/ProductDelete.vue';
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import Redirect from './components/Redirect.vue'

const routes = [
    { path: '/', component: ProductList, name: '/' },
    { path: '/product-list', component: ProductList, name: 'product-list' },
    { path: '/home', component: Home, name: 'home' },
    { path: '/about/:id', component: About, name: 'about' },
    { path: '/contacts', component: Contacts, name: 'contacts' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
];

export default routes