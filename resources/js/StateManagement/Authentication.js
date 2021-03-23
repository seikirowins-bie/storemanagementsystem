import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Auth = new Vuex.Store({
    state:{
        token:localStorage.getItem('authentication-token') || '',
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
    }
});


export default Auth;