import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const Registration = new Vuex.Store({
    state:{
        UserInformation:[],
        isCreated:false
    },
    getters:{
        getUserInformation: state => {
            return state.UserInformation;
        },
        isRegistered: state => {
            return state.isCreated;
        }
    },
    mutations:{
        saveInformation: (state,data)=>{
            state.UserInformation = data;
        },
        checkIfCreated: (state,status) => {
            state.isCreated = status;
        }
    },
    actions:{
        createAccount({commit},data)
        {
            axios.post('/api/create-account',data)
            .then(res => {
                console.log(res);
                if(res.status == 200)
                {   
                    commit('checkIfCreated',true);
                   
                }
            }).catch(error => {
                commit('checkIfCreated',false);
                return Promise.reject(error);
            });
        }
    }
});


export default Registration;