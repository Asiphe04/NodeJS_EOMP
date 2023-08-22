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
    login: async (context, id) => {
      const res = await post(`${URL}login`, id);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUser", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    register: async (context, id) => {
      const res = await post(`${URL}users`, id);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("setMessage", msg);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchUsers(context, payload) {
      try {
        const res = await fetch(`${URL}users`, payload);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async fetchUserById(context, id) {
      try {
        const res = await fetch(`${URL}Users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const { results, err } = await res.json();
        if (results) {
          context.commit("setUsers", results);
        } else {
          context.commit("setMessage", err);
        }
      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    },
    async updateUser(context, payload) {
      try {
        const res = await fetch(`${URL}user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          throw new Error("Failed to update user");
        }
        const { msg, err } = await res.json();
        if (msg) {
          context.commit("setUser", msg);
        } else {
          context.commit("setUser", err);
        }
      } catch (error) {
        console.error("Error updating user:", error);
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
