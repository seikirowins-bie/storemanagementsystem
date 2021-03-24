require('./bootstrap');
require('popper.js');
import Vue from 'vue';
import App from './components/App';
import router from './routing/router';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';


Vue.use(BootstrapVue);
Vue.use(Vuex);




const app = new Vue({
    el: '#app',
    router,
    render:h=>h(App)
});
