import { createStore } from 'vuex'
const URL = "";
export default createStore({
  state: {
    Products: null,
    Product: null,
    showSpinner: true,
  },
 
  mutations: {
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setProduct: (state, Product) => {
      state.Product = Product;
    },
    setSpinner(state, Products) {
      state.showSpinner = Products
    },
  },
  actions: {
    fetchProducts: async (context) => {
      try {
        const res = await fetch(`${URL}Products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const Products = await res.json();
        context.commit("setProducts", Products);
        context.commit('setSpinner', false)
      } catch (error) {
        context.commit('setSpinner', true);
        console.error("Error fetching products:", error);
      }
    },
    fetchProduct: async (context, id) => {
      try {
        const res = await fetch(`${URL}Products/` + id);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const Product = await res.json();
        context.commit("setProduct", Product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
  },
 
})
