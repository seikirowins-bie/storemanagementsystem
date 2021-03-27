import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const User = new Vuex.Store({
    state: {
        fullname: "",
        data: []
    },
    getters: {
        getData: state => {
            return state.data;
        }
    },
    mutations: {
        setData: (state, data) => {
            state.data = data;
        }
    },
    actions: {
        getInformation({ commit }) {
            axios
                .get("/api/user")
                .then(response => {
                    if (response.data) {
                        commit("setData", response.data);
                    }
                })
                .catch(error => {
                    return Promise.reject(error);
                });
        }
    }
});

export default User;
