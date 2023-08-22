<template>
  <div v-if="product" class="employee-details">
    <div class="img-container">
      <img
        :src="product.prodURL"
        :alt="product.prodName"
        class="top-picks-img"
      />
    </div>

    <p>{{ product.prodName }}<br />R{{ product.amount }}</p>
    <p>{{ product.description }}</p>
  </div>
  <div v-else>Error</div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>
