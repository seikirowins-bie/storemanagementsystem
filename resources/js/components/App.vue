<template>
   <div class="container mt-3">
       <div class="row">
            <router-view></router-view>
       </div>
   </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
