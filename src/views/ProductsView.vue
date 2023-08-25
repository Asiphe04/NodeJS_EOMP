<template>
  <h1 class="text-white">Products</h1>
  <select id="sort-select" v-model="selectedSort">
    <option value="alphabetical">Sort Alphabetically</option>
    <option value="price-high">Sort by Price (High to Low)</option>
    <option value="price-low">Sort by Price (Low to High)</option>
  </select>

  <input
    class="m-2"
    v-model="searchTerm"
    placeholder="Search for a product..."
  />

  <div class="filter-btns">
    <button
      type="button"
      class="filter-btn"
      :class="{ 'active-btn': selectedFilter === 'all' }"
      @click="selectFilter('all')"
    >
      all
    </button>
    <button
      type="button"
      class="filter-btn"
      :class="{ 'active-btn': selectedFilter === 'Sale' }"
      @click="selectFilter('Sale')"
    >
      Sale
    </button>
    <button
      type="button"
      class="filter-btn"
      :class="{ 'active-btn': selectedFilter === 'Limited Edition' }"
      @click="selectFilter('Limited Edition')"
    >
      Limited Edition
    </button>
    <button
      type="button"
      class="filter-btn"
      :class="{ 'active-btn': selectedFilter === 'New' }"
      @click="selectFilter('New')"
    >
      New
    </button>
  </div>

  <div
    v-if="filteredProducts.length > 0"
    class="products_container media-container row row-cols-4 m-0"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodID"
      :product="product"
    />
  </div>
  <SpinnerComp v-else />

  <!-- <div v-else class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div> -->
</template>
<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import CardComp from "@/components/CardComp.vue";

export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "alphabetical",
      products: [],
      searchTerm: "", // Add a data property for the search term
    };
  },
  computed: {
    // Rename this computed property to avoid naming conflict
    sortedProducts() {
      let sorted = this.products;

      if (this.selectedFilter !== "all") {
        sorted = sorted.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "price-high") {
        sorted.sort((a, b) => b.amount - a.amount);
      } else if (this.selectedSort === "price-low") {
        sorted.sort((a, b) => a.amount - b.amount);
      }

      return sorted;
    },
    // Create a computed property to filter products based on the search term
    filteredProducts() {
      return this.sortedProducts.filter((product) =>
        product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },

  components: { CardComp, SpinnerComp },
};
</script>

<style>
#sort-select {
  background-color: #161b22;
  color: white;
  border-radius: 3% !important;
  border: none !important;
  height: 40px;
  margin: 10px;
}

/* @media screen and (min-width: 300px) {
  html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  
 }
  .media-container {
  width: 1000px;
  margin-left: 500px;
}
} */

@media screen and (max-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  /* .media-container {
  width: 1000px;
  margin-left: 500px;
  display: grid !important;
  grid-template-columns: auto auto auto !important;
} */
  .products-link {
    display: none;
  }
  .circle-link {
    display: none;
  }
}
.filter-btns {
  text-align: center;
}
.filter-btn {
  background: none;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  margin: 10px 30px;
  font-size: 16px;
  color: #d3d3d3;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.filter-btn::after {
  content: "";
  position: absolute;
  top: 110%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 2px;
  width: 0;
  background-color: #555;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.filter-btn:hover {
  color: #233386;
}
.filter-btn:hover::after {
  width: 100%;
}
/* active button */
.active-btn {
  color: #555;
}
.active-btn::after {
  width: 100%;
}
</style>
