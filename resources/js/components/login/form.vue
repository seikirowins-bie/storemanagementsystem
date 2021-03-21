<template>
    <div>
        <form>
            <div class="form-group">
                <input v-model="credentials.username" type="text" class="form-control" placeholder="Username or Email">
            </div>
             <div class="form-group">
                <input v-model="credentials.password" type="password" class="form-control" placeholder="Password">
            </div>
             <div class="form-group">
                <button @click="InitiateAuthentication" class="btn btn-primary">Login</button>
            </div>
            <div v-if="!isCredentialsValid" class="form-group">
                    <p class="text-danger">Username or Password is incorrect!</p>
            </div>
        </form>
    </div>
</template>
<script>
import Auth from '../../StateManagement/Authentication';
export default {
    data()
    {
        return {
            credentials:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        InitiateAuthentication()
        {
            Auth.commit('Authenticate',this.credentials);
        }
    },
    computed:{
        isCredentialsValid()
        {
            return Auth.getters.checkIfValid;
        }
    }
}
</script>