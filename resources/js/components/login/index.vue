<template>
  <div class="col-lg-12">
    <div class="row">
      <div class="col-lg-5">
        <LoginForm />
      </div>
      <div class="col-lg-7 text-white feature-information">
        <h3><i class="fas fa-toolbox"></i> Features</h3>
        <hr>
        <ul class="pl-5">
            <li>User's Registration</li>
            <li>Assigning role to user (Administrator,Cashier,Creditors)</li>
            <li>Inventory Management</li>
            <li>Credits Management</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "./form";
export default {
  components: {
    LoginForm,
  },
};
</script>
<style>
body {
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #021b79, #0575e6);
}

.feature-information
{
    padding-top: 6em;
}
</style>