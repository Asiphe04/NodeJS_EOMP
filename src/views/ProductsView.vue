<template>
   <h1>Products</h1>
   <div v-if="products" class="products_container row row-cols-4 m-0">
   <CardComp v-for="product of products" :key="product.prodID" :product="product" />
   </div>
   <div v-else><h1>Error:404</h1></div>

</template>
<script>
  import CardComp from '@/components/CardComp.vue'
  export default {
    computed:{
      products(){
        return this.$store.state.products
      }
    },
      mounted(){
        this.$store.dispatch("getProducts")
      },
      components: {CardComp}
   
  }
</script>
<style>

</style>