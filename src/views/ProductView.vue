<template>
   <div v-if="product" class="employee-details">
      <div class="img-container">
         <img :src="product.img" :alt="product.itemName" class="top-picks-img">
      </div>
      
      <p>{{ product.itemName }}<br/>R{{ product.price }}</p>
      <p>{{ product.desc }}</p>
     
      <button class="btn-add-to-cart btn" >Add to Cart</button>
 
      
   </div>
   <div v-else>Error</div>
</template>
<script>
export default{
   
    computed: {
        product() {
            return this.$store.state.product
        },
        id(){
            return this.$route.params.id
        }
    },
    mounted(){
        this.$store.dispatch("getProduct",this.id);
    }
}
</script>