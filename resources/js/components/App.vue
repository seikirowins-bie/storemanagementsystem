<template>
   <div v-bind:class="isAuth ? 'container-fluid' :  'container'" class="mt-5">
       <div class="row">
            <router-view ></router-view>
       </div>
       
   </div>
</template>

<script>
import Auth from '../StateManagement/Authentication';
    export default {
        mounted() {
            
        },
        computed:{
            isAuth()
            {
                return Auth.getters.isAuthenticated;
            }
        }
    }
</script>
