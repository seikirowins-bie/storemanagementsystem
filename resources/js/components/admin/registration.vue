<template>
    <div class="col-lg-4 mt-5">
        <div class="card">
            <div class="card-body">
                  <RegistrationForm />
            </div>
        </div>
    </div>
</template>
<script>
import RegistrationForm from './forms/registration_form';
export default {
    components:{
        RegistrationForm
    }
}
</script>