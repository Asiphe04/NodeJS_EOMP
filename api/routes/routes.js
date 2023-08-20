// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  showProducts,
  showProductByID,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/products")

//get all products
router.get("/Products", showProducts);

//get single product
router.get("/Products/:id", showProductByID);

//create a new product
router.post("/Products", createProduct);

// Delete a product
router.delete("/Products/:id", deleteProduct);

// Update a product
router.put("/Products/:id", updateProduct);

// export default router
module.exports = router;
