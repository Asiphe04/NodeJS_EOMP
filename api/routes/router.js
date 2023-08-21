// module.exports = {
//     productRoutes: require('./ProductRoutes'),
//     userRoutes: require('./UserRoutes'),
//   }
// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  showProducts,
  showProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products");

//get all products
router.get("/products", showProducts);

//get single product
router.get("/products/:id", showProductByID);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/:id", deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);
const controller = require("../controllers/users");
//users
router.get("/users", (req, res) => {
  controller.getUsers(req, res);
});
router.post("/register", (req, res) => {
  controller.register(req, res);
});
router.post("/login", (req, res) => {
  controller.login(req, res);
});
router.get("/users/:id", (req, res) => {
  controller.getUser(req, res);
});
router.patch("/users/:id", (req, res) => {
  controller.updateUser(req, res);
});
router.delete("/users/:id", (req, res) => {
  controller.deleteUser(req, res);
});

// export default router
module.exports = router;
