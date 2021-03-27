<template>
    <div>
         <strong @click="signOut"><i  class="fas fa-sign-out-alt"></i> Sign Out</strong>
    </div>
</template>
<script>
import Auth from '../../../StateManagement/Authentication';
export default {
    methods:{
        signOut()
        {
            
            Auth.dispatch('signOut');
            
        }
    }
}
</script>