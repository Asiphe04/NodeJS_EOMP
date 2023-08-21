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

// export default router
module.exports = router;
