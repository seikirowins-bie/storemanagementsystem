<template>
  <div id="login-form">
    <div class="">
      <h3 class="text-white">
        <i class="fas fa-store-alt"></i> Store Management System
      </h3>
      <hr />
    </div>
    <form>
      <div class="form-group">
        <input
          v-model="credentials.username"
          type="text"
          class="form-control"
          placeholder="Username or Email"
        />
      </div>
      <div class="form-group">
        <input
          v-model="credentials.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <button @click="InitiateAuthentication" class="btn btn-primary">
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
      </div>
      <div v-if="!isCredentialsValid" class="form-group">
        <p class="error-text">Username or Password is incorrect!</p>
      </div>
    </form>
  </div>
</template>
<script>
import Auth from "../../StateManagement/Authentication";
export default {
  data() {
    return {
      credentials: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    InitiateAuthentication() {
      Auth.commit("Authenticate", this.credentials);
    },
  },
  computed: {
    isCredentialsValid() {
      return Auth.getters.checkIfValid;
    },
  },
};
</script>
<style>
#login-form {
  padding-top: 10em;
}

.btn-primary {
  background-color: #042ab5;
  border-width: 0px;
}

.error-text {
  color: #c93e34;
}
</style>