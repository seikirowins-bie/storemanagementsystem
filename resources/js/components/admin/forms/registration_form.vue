<template>
    <div>
        <h2><i class="fas fa-user-circle"></i> New Account</h2>
        <hr />
        <form>
            <div class="form-group">
                <input
                    v-model="user.first_name"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                />
            </div>
            <div class="form-group">
                <input
                    v-model="user.last_name"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                />
            </div>
            <div class="form-group">
                <input
                    type="text"
                    v-model="user.email"
                    class="form-control"
                    placeholder="email"
                />
            </div>
            <div class="form-group">
                <input
                    v-model="user.phone_no"
                    type="text"
                    class="form-control"
                    placeholder="Phone No."
                />
            </div>
            <div class="form-group">
                <select
                    v-if="role_list"
                    v-model="user.role_id"
                    class="form-control"
                >
                    <option value="">Select Role</option>
                    <option
                        v-for="role in role_list"
                        :key="role.id"
                        :value="role.id"
                        >{{ role.role_name }}</option
                    >
                </select>
            </div>
            <div class="form-group text-right">
                <button @click="createAccount" class="btn btn-primary">
                    <i class="fas fa-user-plus"></i>
                    Create Account
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import Registration from "../../../StateManagement/Registration";
export default {
    data() {
        return {
            user: {
                first_name: null,
                last_name: null,
                email: null,
                username: null,
                phone_no: null,
                role_id: null
            },
            role_list: []
        };
    },
    methods: {
        createAccount() {
            this.user.username =
                this.user.first_name.toLowerCase() +
                "." +
                this.user.last_name.toLowerCase() +
                Math.floor(Math.random() * 99);
            Registration.dispatch("createAccount", this.user);
            this.clearForm();
            this.$bvToast.toast("Account has been created", {
                title: `New Customer!`,
                variant: "success",
                toaster: "b-toaster-top-right",
                autoHideDelay: 3000
            });
        },
        clearForm() {
            this.user = {
                first_name: null,
                last_name: null,
                email: null,
                username: null,
                phone_no: null,
                role_id: null
            };
        },
        getRoleList() {
            axios
                .get("/api/user-role")
                .then(response => {
                    if (response) {
                        this.role_list = response.data;
                    }
                })
                .catch(error => {
                    return Promise.reject(error);
                });
        }
    },
    mounted() {
        this.getRoleList();
    },
    computed: {
        isCreated() {
            return Registration.getters.isRegistered;
        }
    }
};
</script>
