<template>
  <div class="container">
    <button class="btn-add">
      <router-link to="/admin/add"> Add Product </router-link>
    </button>
    <table >
      <thead class="table-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-body" v-if="Products">
        <AdminComp
          v-for="Product of Products"
          :key="Product.productID"
          :Product="Product"
    
          />
      </tbody>
      <tbody v-else>
        ERROR 404
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminComp from "@/components/AdminComp.vue";

export default {
  components: {
    AdminComp,
  },
  computed: {
    Products() {
      return this.$store.state.Products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.btn-add {
  margin: 5px;
  margin-left: auto;
  background-color: skyblue;
  border: 1px solid #000000;
  text-align: center;
  border-radius: 0.25rem;

}

table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000000;
}

.table-header th {
  font-size: 1rem;
  border-bottom: 2px solid #000000;
}

.table-body td {
  padding: 1rem 0;
  font-size: 1.5rem;
  border-bottom: 1px solid #000000;
}

.table-body tr:last-child td {
  border-bottom: none;
}
</style>
