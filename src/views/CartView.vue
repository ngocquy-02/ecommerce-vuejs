<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">
                    Shopping cart
                </h3>
            </div>
        </div>

        <!-- display the price -->
        <div class="total-cost pt-2 text-right">
            <h5>Total : ${{ totalCost.toFixed(2) }}</h5>

            <button :disabled="isDisabled()" type="button" class="btn btn-primary confirm" @click="checkout">
                Confirm Order
            </button>
        </div>

        <!-- loop over the cart items and display -->

        <div v-for="cartItem in cartItems" :key="cartItem.id" class="row mt-2 pt-3 align-items-center">
            <div class="col-2"></div>
            <div class="col-md-3">
                <img :src="cartItem.product.imageURL" alt=""
                    class="w-100 card-image-top embed-responsive embed-responsive-16by9" style="object-fit: cover" />
            </div>

            <!-- display product name, quantity -->
            <div class="col-md-5 px-3">
                <div class="card-block px-3">
                    <h6 class="card-title">
                        {{ cartItem.product.name }}
                    </h6>

                    <p class="mb-0 font-weight-bold" id="item-price">
                        $ {{ cartItem.product.price }} per unit
                    </p>
                    <p class="mb-0">Quantity:{{ cartItem.quantity }}</p>
                </div>
                <p class="mb-0">
                    Total:
                    <span class="font-weight-bold">
                        $ {{ cartItem.product.price * cartItem.quantity }}
                    </span>
                </p>
                <br />
                <a href="#" class="text-right" @click="deleteItem(cartItem.id)">Remove from cart</a>
            </div>
            <div class="col-2"></div>
            <div class="col-12">
                <hr />
            </div>
        </div>

        
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            cartItems: [],
            token: null,
            totalCost: 0,
        };
    },
    props: ["baseURL"],
    methods: {
        // fetch All items in cart
        listCartItems() {
            axios
                .get(`${this.baseURL}cart/?token=${this.token}`)
                .then((res) => {
                    const result = res.data;
                    this.cartItems = result.cartItems;
                    this.totalCost = result.totalCost;
                })
                .catch((err) => console.log("err", err));
        },
        deleteItem(itemId) {
            axios
                .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
                .then((res) => {
                    if (res.status == 200) {
                        this.$router.go(0);
                    }
                })
                .catch((err) => console.log("err", err));
        },

        // go to checkout page
        checkout() {
            this.$router.push({ name: 'Checkout' });
        },
        isDisabled() {
            if (this.cartItems.length === 0) {
                return true;
            }
            return false;
        },

        showDetails(productId) {
            this.$router.push({
                name: 'ShowDetails',
                params: { id: productId },
            });
        },
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.listCartItems();
    },
};
</script>

<style scoped>
h4,
h5 {
    color: #484848;
    font-size: 700;
}
</style>