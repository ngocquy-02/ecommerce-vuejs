<template>
  <div id="app">
    <div id="nav">
      <NavBar :cartCount="cartCount" @resetCartCount="resetCartCount"  v-if="!['Signup', 'Signin'].includes($route.name)"/>
    </div>
    <div style="min-height: 60vh">
      <router-view v-if="products && categories" :baseURL="baseURL" :products="products" :categories="categories"
        @fetchData="fetchData">
      </router-view>
    </div>
    <!-- <Footer /> -->
    <FooterView v-if="!['Signup', 'Signin'].includes($route.name)"/>
  </div>
</template>

<script>
const axios = require('axios');
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue';

export default {
  components: { NavBar, FooterView },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      token: null,
      cartCount: 0,
    }
  },
  methods: {
    async fetchData() {
      // fetch products
      await axios.get(this.baseURL + "product/")
        .then(res => this.products = res.data)
        .catch(err => console.log(err))

      //fetch categories
      await axios.get(this.baseURL + "category/")
        .then(res => this.categories = res.data)
        .catch(err => console.log(err))

      // fetch cart item if token is present i.e logged in
      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log("err", err));
      }
    },

    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
