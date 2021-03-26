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
      <h5>Juan Dela Cruz</h5>
      <p>09077755144</p>
      <hr />

     

      <a class="dropdown-item">
           <SignOutButton />
      </a>
    </div>
  </div>
</template>
<script>
import SignOutButton from './sign-out';
export default {
    components:{
        SignOutButton
    }
}
</script>
<style>
#user-card
{
    width: 20em;
}
</style>