<template>
     <router-link :to="{name: 'products', params: {id: product.prodID}}" >
      <div>
      </div>
     <div class="top-picks-items col-3 container add {{ product.category }}">
        <img :src ="product.prodURL" :alt="product.prodName" class="top-picks-img">
    
     <p class="price">{{ product.prodName }} <br> R{{ product.amount }}</p>
      <button class="btn-see-more btn" >See more</button>
    </div>
    
</router-link>
</template>
<script>
 export default{
        props: ["product"]
    }
</script>
<style>
a{
    text-decoration: none;
   color: white;
}
.top-picks-img {
  height: 186px;
  width: 100%;
  padding: 5px;
  object-fit: fill;
  border-radius: 5% !important;
  
}
.price {
  font-size: 24px;
  font-family: 'Libre Baskerville', serif;

}
.top-picks-items {
  /* border: 1px solid white; */
  background-color: rgb(33, 33, 80);
  box-shadow: black 5px 5px 5px;
  margin: 5px;
  margin-bottom: 24px;
  padding: 5px;
  text-align: center;
  border-radius: 5%;
  width: 85%;
  /* height: 270px; */

}

.top-picks-items:hover {
  background: #161b22 !important;
}
.btn-see-more {
  background: #232b36 !important;

  color: white !important;
  border-radius: 7% !important;
  width: 8em;

  border-style: none;
}
.btn-add-to-cart {
  background: #238636 !important;
  color: white !important;
  border-radius: 7% !important;
  width: 8em !important;
    margin: 5px;
  border-style: none;
}
</style>