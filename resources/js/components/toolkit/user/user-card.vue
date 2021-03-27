<template>
  <div class="dropdown">
    <i
      class="dropdown-toggle far fa-user-circle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    ></i>

    <div
      id="user-card"
      class="dropdown-menu dropdown-menu-right p-3"
      aria-labelledby="navbarDropdown"
    >
      <h5>{{ user.first_name + " " + user.last_name }}</h5>
      <p>{{ user.email }}</p>
      <hr />

      <a class="dropdown-item">
        <SignOutButton />
      </a>
    </div>
  </div>
</template>
<script>
import SignOutButton from "./sign-out";
import User from "../../../StateManagement/User";
export default {
  components: {
    SignOutButton,
  },
  mounted() {
    User.dispatch("getInformation");
  },
  computed: {
    user() {
      return User.getters.getData;
    },
  },
};
</script>
<style>
#user-card {
  width: 20em;
}
</style>