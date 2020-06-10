import ProductList from './components/ProductList.vue'
import ProductAdd from './components/ProductAdd.vue';
import ProductView from './components/ProductView.vue';
import ProductEdit from './components/ProductEdit.vue';
import ProductDelete from './components/ProductDelete.vue';

const routes = [
        {
            name: 'product-list',
            path: '/',
            component: ProductList
        },
        {
            name: 'product-add',
            path: '/product-add',
            component: ProductAdd
        },
        {
            name: 'product-view',
            path: '/product-view/:id',
            component: ProductView
        },
        {
            name: 'product-edit',
            path: '/product-edit/:id',
            component: ProductEdit
        },
        {
            name: 'product-delete',
            path: '/product-delete/:id',
            component: ProductDelete
        }
];

export default routes