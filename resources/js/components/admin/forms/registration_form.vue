<template>
    <div>
        <h2>New Account</h2>
        <hr>
        <form>
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                />
            </div>
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="email" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Phone No." />
            </div>
            <div class="form-group">
                <select class="form-control">
                    <option value="">Select Role</option>
                </select>
            </div>
            <div class="form-group text-right">
                <button class="btn btn-primary">
                    <i class="fas fa-user-plus"></i>
                    Create Account</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {};
</script>
