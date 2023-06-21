import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

import ProductView from '../views/product/ProductView.vue'
import AddProduct from '../views/product/AddProduct.vue'
import EditProduct from '../views/product/EditProduct.vue'
import ShowDetails from '../views/product/ShowDetails.vue'

import AddCategory from '../views/category/AddCategory.vue'
import CategoryView from '../views/category/CategoryView.vue'
import EditCategory from '../views/category/EditCategory.vue'
import ListProducts from '../views/category/ListProducts.vue'

import Signup from '../views/SignUp.vue'
import Signin from '../views/SignIn.vue'
import WishList from '../views/product/WishList.vue'
import CartView from '../views/CartView.vue'

import Success from '../helper/payment/Success.vue'
import Failed from '../helper/payment/Failed.vue'

import PageNotFound from '../views/PageNotFound.vue'

import CheckOut from '../views/checkout/CheckOut.vue'

import OrderView from '../views/orders/OrderView.vue'
import OrderDetails from '../views/orders/OrderDetails.vue'

import TestNavVue from '@/components/TestNav.vue'

const routes = [
  {
    path: '/test',
    name: 'TestNavVue',
    component: TestNavVue
  },

  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: CategoryView
  },
  // Category Edit
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  // Category details page
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },

  // Admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },

  // Product
  {
    path: '/product',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: ProductView
  },
  // Add product
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  // Edit Product
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  // Show Details of product
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

  // Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  // Signin
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  //Wish List 
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  // Cart 
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  
  // Payment Success
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success
  },
  // Payment Failed
  {
    path: '/payment/failed',
    name: 'PaymentFailed',
    component: Failed
  },

  //Checkout
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckOut
  },

  // Order
  {
    path : '/order',
    name : 'Order',
    component : OrderView
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  },


  //Page Not found
  {
    path : '/:catchAll(.*)',
    name : 'PageNotFound',
    component : PageNotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
