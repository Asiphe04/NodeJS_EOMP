<!-- <template>
  <h1>Products</h1>

  <div class="filter-btns">
    <button type="button" class="filter-btn" id="all" data-filter="all">
      all
    </button>
    <button type="button" class="filter-btn" id="Sale" data-filter="Sale">
      Sale
    </button>
    <button
      type="button"
      class="filter-btn"
      id="limited Edition"
      data-filter="limited Edition"
    >
      Limited Edition
    </button>
    <button type="button" class="filter-btn" id="New" data-filter="New">
      New
    </button>
  </div>

  <select id="sort-select">
    <option>Sort options</option>
    <option value="alphabetical">Sort Alphabetically</option>
    <option value="price-high">Sort by Price (High to Low)</option>
    <option value="price-low">Sort by Price (Low to High)</option>
  </select>

  <div v-if="products" class="products_container row row-cols-4 m-0">
    <CardComp
      v-for="product of products"
      :key="product.prodID"
      :product="product"
    />
  </div>
  <div v-else><h1>Error:404</h1></div>
</template>
<script>
import CardComp from "@/components/CardComp.vue";
export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "alphabetical",
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let filteredProducts = this.products;

      if (this.selectedFilter !== "all") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.selectedSort === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price);
      }

      return filteredProducts;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: { CardComp },
};
</script>
 -->

<template>
  <h1>Products</h1>

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

  <select id="sort-select" v-model="selectedSort">
    <option value="alphabetical">Sort Alphabetically</option>
    <option value="price-high">Sort by Price (High to Low)</option>
    <option value="price-low">Sort by Price (Low to High)</option>
  </select>

  <div
    v-if="filteredProducts.length > 0"
    class="products_container row row-cols-4 m-0"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodID"
      :product="product"
    />
  </div>
  <div v-else><h1>Error:404</h1></div>
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
    filteredProducts() {
      return this.products.filter((product) => {
        if (this.selectedFilter === "all") {
          return true;
        } else {
          return product.category === this.selectedFilter;
        }
      });
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
#sort-select {
  background-color: #161b22;
  color: white;
  border-radius: 3% !important;
  border: none !important;
  height: 40px;
  margin: 10px;
}
@media screen and (max-width: 767px) {
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
