<template>
    <div class="col-lg-12">
        <div class="row">
            <div class="col-lg-4 mt-5">
                <div class="card">
                    <div class="card-body">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
            <div class="col-lg-8 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h3><i class="fas fa-list-alt"></i> User's List</h3>
                        <hr>
                         <UserList />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RegistrationForm from "./forms/registration_form";
import UserList from "./tables/userList";
export default {
    components: {
        RegistrationForm,
        UserList
    }
};
</script>
