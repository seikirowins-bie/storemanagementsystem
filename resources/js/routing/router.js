// components
import CreditorPage from './../components/creditor/index'
import InventoryPage from './../components/inventory/index'
import LoginPage from './../components/login/index'
//end of components
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'login-page',
            component:LoginPage
        },
        {
            path:'/creditors',
            name:'creditor-page',
            component:CreditorPage
        },
        {
            path:'/inventory',
            name:'inventory-page',
            component:InventoryPage
        }
    ]
});

export default router;