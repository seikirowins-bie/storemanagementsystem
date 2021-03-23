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
      <p v-if="isAuth" class="text-white">Authenticated</p>
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
      // axios
      //   .get("/sanctum/csrf-cookie")
      //   .then((response) => {
      //     axios
      //       .post("/api/authenticate", this.credentials)
      //       .then((response) => {
      //         if (response.status == 200) {
      //           let res = response.data;

      //           Auth.dispatch(
      //             "Authenticate",
      //             localStorage.setItem("authentication-token", res.access_token)
      //           );
      //             console.log(this.isAuth);
      //             this.$router.push({
      //               name:'creditor-page'
      //             });

      //         }
      //       })
      //       .catch((error) => {
      //         const err = error.request;
      //        if(err)
      //        {
      //           if (err.status == 422) {
      //           Auth.commit("setValidityStatus", false);
      //         }
      //         return Promise.reject(error);
      //        }
      //       });
      //   })
      //   .catch((error) => {
      //     return Promise.reject(error);
      //   });
      Auth.dispatch("Authenticate", this.credentials);
     
    },
  },
  mounted() {},
  computed: {
    isCredentialsValid() {
      return Auth.getters.checkIfValid;
    },
    isAuth() {
      return Auth.getters.isAuthenticated;
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