<template>
    <div>
  <b-button class="btn btn-primary" v-b-modal.addProduct><i class="fas fa-plus-circle"></i> Add Product</b-button>
  <b-modal id="addProduct" title="New Product" hide-footer>
    <form>
        <div class="form-group">
            <input type="text" placeholder="Product" class="form-control">
        </div>
    </form>
  </b-modal>
    </div>
</template>
<script>
export default {
    
}
</script>