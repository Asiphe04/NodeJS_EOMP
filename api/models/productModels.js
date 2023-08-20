//Import database connection
const db = require('../config/db')

//Get products
const getProducts = (result) =>{
    db.query('SELECT productID, productName, image, description, price , category FROM Products', (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}
//Get a single product

const getProductByID = (id, result) => {
    const query = 'SELECT productID, productName, image, description, price , category FROM Products WHERE productID = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.log('Error executing query:', query);
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
  };
  

//Add a new product
const insertProduct = (data, result) => {
    db.query('INSERT INTO Products SET ?;',[data],(err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        } else{
            result(null,results);
        }
    })
}

// Update an existing product
const updateProductByID = (id, data, result) => {
    db.query('UPDATE Products SET productName = ?, image = ?, description = ?, price = ?, category = ? WHERE productID = ?', [data.productName, data.image, data.description, data.price, data.category, id], (err, results) => {
        if (err) {
            console.log(err);
            result({ error: "Failed to update product." }, null);
        } else {
            result(null, results);
        }
        
    });
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

// Delete a product
const deleteProductByID = (id, result) => {
    db.query('DELETE FROM Products WHERE productID = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};


module.exports = {
    getProducts, 
    getProductByID, 
    insertProduct,
    updateProductByID,
    deleteProductByID
}