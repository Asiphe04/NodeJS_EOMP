import { createStore } from 'vuex'
const URL = "https://nodejseomp.onrender.com/";
export default createStore({
  state: {
    users: null,
    user: null,
    Products: null,
    Product: null,
    showSpinner: true,
    message: null,
  },
 
  mutations: {
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setProduct: (state, Product) => {
      state.Product = Product;
    },
    setUsers:(state, users) =>{
      state.users = users;
    },
    setUser:(state, user) =>{
      state.users = user;
    },
    setSpinner(state, Products) {
      state.showSpinner = Products
    },
  },
  actions: {
     login: async(context, id)=> {
      const res = await post(`${URL}login`, id);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage', err)
      }
    },
     register: async(context, id) => {
      const res = await post(`${URL}users`, id)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
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
    
    fetchProducts: async (context) => {
      try {
        const res = await fetch(`${URL}products`);
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
    // fetchProduct: async (context, id) => {
    //   try {
    //     const res = await fetch(`${URL}Products/` + id);
    //     if (!res.ok) {
    //       throw new Error("Failed to fetch product");
    //     }
    //     const Product = await res.json();
    //     context.commit("setProduct", Product);
    //   } catch (error) {
    //     console.error("Error fetching product:", error);
    //   }
    // },
    fetchProduct: async (context, id) => {
      fetch(`${URL}products`)
        .then((res) => res.json())
        .then(({ products }) => {
          let product;
          products.forEach((prod) => {
            if (prod.id == id) {
              product = prod;
            }
          });
          context.commit("setProduct", product);
        });
    },
  },
 
})
