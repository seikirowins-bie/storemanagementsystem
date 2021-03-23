<template>
  
            <div class="col-lg-3">
                <div  id="transaction-component" class="card">
                    <div class="card-body">
                          <Transaction />
                    </div>
                </div>
            </div>
       
</template>
<script>
import Transaction from './transaction';
export default {
    components:{
        Transaction
    }
}
</script>
<style scoped>
#transaction-component
{
    position: relative;
    bottom: 0;
    left: 0;
    float: left;
    height: 100vh;
}

</style>
