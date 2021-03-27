<template>
  <div>
    <b-navbar class="fixed-top navbar" toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <i class="fas fa-store-alt"></i> Store Management System 
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-form>
          <b-form-input class="mr-sm-2 form-control" placeholder="Search"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>

              <b-navbar-nav class="ml-auto">
                 <b-nav-item v-if="isAdmin" >
                            <RegistrationToolkit />
                          </b-nav-item>
                          <b-nav-item >
                            <NotificationToolkit />
                          </b-nav-item>
                             <b-nav-item >
                               <UserToolki />
                             </b-nav-item>
              </b-navbar-nav>


    </b-navbar>
  </div>
</template>
<script>
import NotificationToolkit from '../../toolkit/notification/notification';
import UserToolki from '../../toolkit/user/user-card';
import RegistrationToolkit from '../../toolkit/registration/adduser';

// authorization
import Auth from '../../../StateManagement/Authentication';
export default {
  components:{
    NotificationToolkit,
    UserToolki,
    RegistrationToolkit
  },
  computed:{
    isAdmin()
    {
      return Auth.getters.getUserRole == 1;
    }
  }
};
</script>
<style>
.navbar {
  background-color: white;
}
</style>