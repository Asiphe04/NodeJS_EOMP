<template>
  <div>
    <div class="container flex-container" v-if="Product">
      <label for="productName">Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="productName"
        name="productName"
        v-model="Product.productName"
        :placeholder="Product.productName"
      />
      <label for="image">Image</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="image"
        name="image"
        v-model="Product.image"
        :placeholder="Product.image"
      />
      <label for="description">Description</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="description"
        name="description"
        v-model="Product.description"
        :placeholder="Product.description"
      />

      <label for="price">Price</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="price"
        name="price"
        v-model="Product.price"
        :placeholder="Product.price"
      />
      <label for="category">Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="category"
        name="category"
        v-model="Product.category"
        :placeholder="Product.category"
      />

      <button @click="updateProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productName: '',
      image: '',
      description: '',
      price: '',
      category: '',
   
    };
  },
  methods: {
    async updateProduct() {
      try {
        await axios.put(
          `https://mini-e-commerce.onrender.com/Products/${this.$route.params.id}`,
          {
            productName: this.Product.productName,
            image: this.Product.image,
            description: this.Product.description,
            price: this.Product.price,
            category: this.Product.category,
          }
        );
        this.productName = '';
        this.image = '';
        this.description = '';
        this.price = '';
        this.category = '';

        this.$router.push("/admin");
      } catch (err) {
        console.log(err);
      }
    },
  },
  props: ["id"],
  computed: {
    Product() {
      return this.$store.state.Product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id),
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #0033ff;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
