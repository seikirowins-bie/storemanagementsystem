<template>
    <div class="col-lg-12 table-responsive">
        <div class="row">
            <div class="col-lg-6">
                <h3><i class="fas fa-boxes"></i> Inventory</h3>
            </div>
            <div class="col-lg-6 text-right">
                <AddProductBtn />
            </div>
            
        </div>
        <hr />
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Item #</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Forcast Sale</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Datu Puti Toyo</td>
                    <td>10</td>
                    <td>40</td>
                    <td>4000</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import AddProductBtn from './buttons/addProduct';
export default {
    components:{
        AddProductBtn
    }
};
</script>
