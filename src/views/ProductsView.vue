<template>
  <h1 class="text-white">Products</h1>
  <select id="sort-select" v-model="selectedSort">
    <option value="alphabetical">Sort Alphabetically</option>
    <option value="price-high">Sort by Price (High to Low)</option>
    <option value="price-low">Sort by Price (Low to High)</option>
  </select>

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

  <div v-else class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";
export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "alphabetical",
      products: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedFilter !== "all") {
        filtered = filtered.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "price-high") {
        filtered.sort((a, b) => b.amount - a.amount);
      } else if (this.selectedSort === "price-low") {
        filtered.sort((a, b) => a.amount - b.amount);
      }

      return filtered;
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

  components: { CardComp },
};
</script>

<style>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fed;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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
  html,body {
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
