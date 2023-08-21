//import functions from product model
const {
  getUsers,
  getUserByID,
  insertUser,
  updateUserByID,
  deleteUserByID,
} = require("../models/userModels");

//get all products
const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single product
const showUserByID = (req, res) => {
  getUserByID(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create new product
const createUser = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// delete a product
const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserByID(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update a product
const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  updateUserByID(id, data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  showUsers,
  showUserByID,
  createUser,
  deleteUser,
  updateUser,
};
