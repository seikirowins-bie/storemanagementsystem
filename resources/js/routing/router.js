// components
import CreditorPage from './../components/creditor/index'
import InventoryPage from './../components/inventory/index'
import LoginPage from './../components/login/index'
import DashboardPage from './../components/dashboard/index'
import RegistrationPage from './../components/admin/registration';
//end of components

//state management
import Auth from '../StateManagement/Authentication';

// end of state management


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'login-page',
            component:LoginPage,
            beforeEnter: ((to,from,next)=>{
                if(Auth.getters.isAuthenticated)
                {
                    next({
                        name:'dashboard-page'
                    });
                }
                next();
            })
        },
        {
            path:'/dashboard',
            name:'dashboard-page',
            component:DashboardPage,
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/creditors',
            name:'creditor-page',
            component:CreditorPage,
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/inventory',
            name:'inventory-page',
            component:InventoryPage,
            meta:{
                requiresAuth:true
            }
        },
        {
            path:'/registration',
            name:'registration-page',
            component:RegistrationPage,
            meta:{
                requiresAuth:true,
                adminOnly:true
            }
        }
    ]
});



// navigation guard, redirect unauthenticated user to the login page
router.beforeEach((to,from,next)=>{
    // if(to.matched.some((record => record.meta.requiresAuth)))
    if(to.meta.requiresAuth)
    {
        if(!Auth.getters.isAuthenticated)
        {
            next({
                name:'login-page'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;