import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../routing/router";

Vue.use(Vuex);

const Auth = new Vuex.Store({
    state: {
        token: localStorage.getItem("authentication-token") || "",
        isLoggedIn: localStorage.getItem("verify-authentication") || "",
        isValid: true
    },
    getters: {
        checkIfValid: state => {
            return state.isValid;
        },
        isAuthenticated: state => {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setValidityStatus: (state, status) => {
            state.isValid = status;
        },
        setLoggedInStatus: (state, status) => {
            state.isLoggedIn = status;
        }
    },
    actions: {
        Authenticate({ commit, state }, credentials) {
            axios
                .get("/sanctum/csrf-cookie")
                .then(response => {
                    axios
                        .post("/api/authenticate", credentials)
                        .then(response => {
                            let res = response.data;

                           

                            // set data to the local storage
                            localStorage.setItem(
                                "authentication-token",
                                res.access_token
                            );
                            localStorage.setItem("verify-authentication", true);

                            // get data from local storage
                            commit(
                                "setToken",
                                localStorage.getItem("authentication-token")
                            );
                            commit(
                                "setLoggedInStatus",
                                localStorage.getItem("verify-authentication")
                            );

                            router.push({
                                name: "dashboard-page"
                            });
                        })
                        .catch(error => {
                            const err = error.request;
                            if (err) {
                                if (err.status == 422) {
                                    commit("setValidityStatus", false);
                                }
                                return Promise.reject(error);
                            }
                        });
                })
                .catch(error => {
                    return Promise.reject(error);
                });
        },
        signOut({ commit,state }) {
            
                axios
                    .post("api/sign-out",{
                        tokenid:state.token
                    })
                    .then(response => {
                        if (response) {
                            console.log(response);
                            if (response.status == 200) {
                                localStorage.clear();
                                commit("setToken", null);

                                commit("setLoggedInStatus", false);

                                router.push({
                                    name: "login-page"
                                });
                            }
                        }
                    })
                    .catch(error => {
                        return Promise.reject(error);
                    });
                
            
        }
    }
});

export default Auth;
