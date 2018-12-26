<template>
    <div>
        <h4>Sales Order</h4>
        <form @submit.prevent="handleSubmit">

            <table class="table" style="font-size: .8rem;">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ITEM DETAILS</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">RATE</th>
                    <th scope="col">TAX</th>
                    <th scope="col">AMOUNT</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="sales_order in salesOrder">
                    <template v-for="sales in sales_order.itemsalesorder_set">
                        <tr :key="sales.id">
                            <th scope="row">{{sales.id}}</th>
                            <td>{{sales.items.item_name}}</td>
                            <td><input type="number" :value="sales.items.quantity"></td>
                            <td>
                                <input type="number" :value="sales.items.selling_price">
                            </td>
                            <td>
                                <vue-select v-model="sales.tax" :endPoint="'tax/choices/'"></vue-select>
                            </td>
                            <td>
                                <template v-if="sales.quantity">{{sales.quantity * sales.items.selling_price}}
                                </template>
                                <template v-else>{{sales.items.selling_price}}</template>
                            </td>
                        </tr>
                    </template>

                </template>

                </tbody>
            </table>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <a href="#">add another line</a><br>
                        <a href="#">Save</a><br>
                        <a href="#">Save and Send</a><br>
                        <a href="#">Cancel</a>
                    </div>
                    <div class="col-md-4 col-offset-3" style="margin-left: 23rem;">
                        <div v-for="sales_order in salesOrder" :key="sales_order.id">
                            <p>Sub Total {{sales_order.sub_total}}</p>
                            <p>Discount {{sales_order.discount}}</p>
                            <p>Shipping Charges {{sales_order.shipping_charges}}</p>
                            <p>Adjustment {{sales_order.adjustment}}</p>
                            <p>Total ( NPR ) {{sales_order.total}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import VueSelect from '@/components/VueSelect.vue'

    export default {
        data() {
            return {
                salesOrder: [],
                selected: null,
                contact: '',
                error: ''
            }
        },
        components: {
            VueSelect
        },
        watch: {},
        methods: {
            handleSubmit() {
                // Send data to the server or update your stores and such.
                global.axios
                    .post('sales/order', {})
            },
            output(v) {
                this.selected = v
            }
        },
        created() {
            let self = this
            global.axios.all([global.axios.get('sales/order'),
            ])
                .then(global.axios.spread((salesOrderResponse) => {
                    console.log(salesOrderResponse.data);
                    self.salesOrder = salesOrderResponse.data.results
                }))
                .catch(error => console.log(error));
        }
    }
</script>
<style>

</style>
