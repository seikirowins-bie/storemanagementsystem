<template>
  <div class="col-lg-12">
    <div class="row">
      <div class="col-lg-5">
        <LoginForm />
      </div>
      <div class="col-lg-7  feature-information">
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


.feature-information
{
    padding-top: 6em;
}
</style>