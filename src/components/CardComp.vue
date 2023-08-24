<template>
  <router-link :to="{ name: 'product', params: { id: product.prodID } }">
    
    <div class="top-picks-items pro-container col-3 container add {product.category}">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />

      <p class="price">
        {{ product.prodName }} <br />
        R{{ product.amount }}
      </p>
      <button class="btn-see-more btn">See more</button>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.top-picks-img {
  height: 186px !important;
  width: 100% !important;
  padding: 5px !important;
  object-fit: fill !important;
  border-radius: 5% !important;
}
.price {
  font-size: 24px !important;
  font-family: "Libre Baskerville", serif !important;
}
.top-picks-items {
  /* border: 1px solid white; */
  background-color: rgb(33, 33, 80) !important;
  box-shadow: black 5px 5px 5px !important;
  margin: 5px !important;
  margin-bottom: 24px !important;
  padding: 5px !important;
  text-align: center !important;
  border-radius: 5% !important;
  width: 85% !important;
  /* height: 270px; */
}

.top-picks-items:hover {
  background: #161b22 !important;
}
.btn-see-more {
  background: #232b36 !important;

  color: white !important;
  border-radius: 7% !important;
  width: 8em !important;

  border-style: none !important;
}


  


@media only screen and (max-width: 700px) {

  .top-picks-items {
  /* background-color: rgb(33, 33, 80) !important;
  box-shadow: black 5px 5px 5px !important;
  margin: 5px !important;
  margin-bottom: 24% !important;
  padding: 5% !important;
  text-align: center !important;
  border-radius: 5% !important;
  width: 290% !important; */
  width: 100%;
  margin: 5px auto;
  padding: 10px;
  
}
.top-picks-items:hover {
  background: #161b22 !important;
}
  .btn-see-more {
  background: #232b36 !important;
  color: white !important;
  border-radius: 7% !important;
  width: 6em !important;
  border-style: none !important;
  
}
}
</style>
