import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Auth = new Vuex.Store({
    state:{
        token:localStorage.getItem('authentication-token'),
        isAuthenticated:localStorage.getItem('verify-authentication'),
        isValid:true
    },
    getters:{
        checkIfValid: state => {
            return state.isValid;
        }
    },
    mutations:{
        Authenticate: (state,credentials) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login',credentials).then(response => {

                    

                }).catch(error => {
                   if(error.request.status == 422)
                   {
                       state.isValid = false;
                   }
                    return Promise.reject(error);
                });
            }).catch(error => {
                
                return Promise.reject(error);
            });
            
        }
    }
});


export default Auth;