import { createStore } from "vuex";
const URL = "https://nodejseomp.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
  },

  mutations: {
    setMessage: (state, mesage) => {
      state.message = mesage;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
    setSpinner(state, products) {
      state.showSpinner = products;
    },
  },
  actions: {
    getUsers: async (context) => {
      try {
        const res = await fetch(`${URL}users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
        context.commit("setSpinner", false);
      } catch (error) {
        context.commit("setSpinner", true);
        console.error("Error fetching users:", error);
      }
    },

    async getUser(context, id) {
      try {
        const res = await fetch(`${URL}users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await response.json();

        // Assuming your API returns the product directly
        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    },

    getProducts: async (context) => {
      try {
        const res = await fetch(`${URL}products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await res.json();
        context.commit("setProducts", products);
        context.commit("setSpinner", false);
      } catch (error) {
        context.commit("setSpinner", true);
        console.error("Error fetching products:", error);
      }
    },
    getProduct: async (context, id) => {
      try {
        const response = await fetch(`${URL}products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const product = await response.json();

        // Assuming your API returns the product directly
        context.commit("setProduct", product);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    },
  },
});
