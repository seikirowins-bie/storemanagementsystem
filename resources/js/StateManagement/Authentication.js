import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Auth = new Vuex.Store({
    state:{
        token:localStorage.getItem('authentication-token') ,
        isValid:true
    },
    getters:{
        checkIfValid: state => {
            return state.isValid;
        },
        isAuthenticated: state => {
            return state.token;
        }
    },
    mutations:{
        setToken: (state,token) => {
            state.token = token;   
        },
        setValidityStatus: (state,status) => {
            state.isValid = status;
        }
    },
    actions:{
        Authenticate({commit},credentials){
            axios
            .get("/sanctum/csrf-cookie")
            .then((response) => {
              axios
                .post("/api/authenticate", credentials)
                .then((response) => {
                  if (response.status == 200) {
                    let res = response.data;
    
                    commit('setToken',localStorage.setItem('authentication-token',res.access_token));
                    
                      this.$router.push({
                        name:'creditor-page'
                      });
                    
                  }
                })
                .catch((error) => {
                  const err = error.request;
                 if(err)
                 {
                    if (err.status == 422) {
                    commit("setValidityStatus", false);
                  }
                  return Promise.reject(error);
                 }
                });
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }
    }
});


export default Auth;