<template>
    <div>
        <h3><i class="fas fa-receipt"></i> TRANSACTIONS</h3>
        <hr>
        <SearchBar />
        <TransactionList />
    </div>
</template>
<script>
import SearchBar from './transaction-sub/search-bar';
import TransactionList  from './transaction-sub/transaction-list';

export default {
    components:{
        SearchBar,
        TransactionList
    }
}
</script>