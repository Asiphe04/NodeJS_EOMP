<template>
   <h1>Products</h1>
   <div class="sort-container">
    <select class="sort" name="" id="">
      <option selected>Sort</option>
      <option value="expensive to less expensive">expensive to less expensive</option>
      <option value="less expensive to expensive">less expensive to expensive</option>
    </select>
   </div>
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

.sort-container {
  margin-right: 800px;
  margin-bottom: 55px;
}
.sort {
text-align: center;
  height: 30px;
  border-radius: 8px;
  box-shadow: black 5px 5px 5px;
  background-color: rgb(33, 33, 80);
  color: white;
  font-size: 20px;
  font-family: 'Libre Baskerville', serif;
}

</style>