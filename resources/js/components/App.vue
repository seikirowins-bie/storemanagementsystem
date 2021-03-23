<template>
  <div v-bind:class="isAuth ? 'container-fluid' : 'container'" class="mt-5">
    <div v-if="isAuth" class="row">
      <div class="col-lg-12">
        <navigationBar />
      </div>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import the layout when authenticated
import navigationBar from "./layout/navigationBar/navigation-bar";

import Auth from "../StateManagement/Authentication";
export default {
  components: {
    navigationBar,
  },
  mounted() {},
  computed: {
    isAuth() {
      return Auth.getters.isAuthenticated;
    },
  },
};
</script>
