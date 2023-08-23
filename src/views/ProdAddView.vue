<template>
  <div>
    <div class="container flex-container">
      <label>Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="productName"
        v-model="productName"
      />
      <label>Image</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="image"
        v-model="image"
      />
      <label>Description</label>

      <input
        type="text"
        autocomplete="off"
        required
        name="description"
        v-model="description"
      />

      <label>Price</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="price"
        v-model="price"
      />
      <label>Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        name="category"
        v-model="category"
      />

      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      productName: "",
      image: "",
      description: "",
      price: "",
      category: "",
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post("https://mini-e-commerce.onrender.com/Products/", {
          productName: this.productName,
          image: this.image,
          description: this.description,
          price: this.price,
          category: this.category,
        });

        this.productName = "";
        this.image = "";
        this.description = "";
        this.price = "";
        this.category = "";

        this.$router.push("/admin");
      } catch (err) {
        alert(err);
      }
    },
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
  background-color: #09ff00;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
