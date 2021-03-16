// components
import CreditorPage from './../components/creditor/index'
//end of components
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'creditor-page',
            component:CreditorPage
        }
    ]
});

export default router;