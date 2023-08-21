//import functions from product model
const {
    getProducts,
    getProductByID,
    insertProduct,
    deleteProductByID,
    updateProductByID,
  } = require("../models/productModels");
  
  //get all products
  const showProducts = (req, res) => {
    getProducts((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  // get single product
  const showProductByID = (req, res) => {
    getProductByID(req.params.id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  // create new product
  const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  // delete a product
  const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductByID(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  // update a product
  const updateProduct = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    updateProductByID(id, data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  module.exports = {
    showProducts,
    showProductByID,
    createProduct,
    deleteProduct,
    updateProduct,
  };
  