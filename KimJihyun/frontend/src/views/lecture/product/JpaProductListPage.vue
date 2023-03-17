<template>
    <v-container>
      <h2>Vue + Spring + JPA Products</h2>
      <router-link :to="{ name: 'JpaProductRegisterPage' }">
        상품 등록
      </router-link>
      <jpa-product-list :products="products"/>
    </v-container>
  </template>
  
  <script>
  import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
  export default {
    components: { JpaProductList },
    name: "JpaProductListPage",
   
  }
  </script>
  
  <style>
  </style>