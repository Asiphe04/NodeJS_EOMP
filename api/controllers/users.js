//import functions from product model
// const bcrypt = require("bcrypt");
// const router = express.Router();
// const bodyParser = require("body-parser");
// const { verifyAToken } = require("../middleware/authentication");
// const routes = express.Router();
const bcrypt = require("bcrypt");
const express = require("express"); // Import express
const router = express.Router();
const bodyParser = require("body-parser");
const { createToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();

const {
  getUsers,
  getUserByID,
  insertUser,
  updateUserByID,
  deleteUserByID,
  loginUser,
} = require("../models/userModels");

//get all users
const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single user
const showUserByID = (req, res) => {
  getUserByID(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create new user
const createUser = (req, res) => {
  const data = req.body;
  data.userPass = bcrypt.hashSync(data.userPass, 10);
  const user = {
    emailAdd: data.emailAdd,
    userPass: data.userPass,
  };
  let token = createToken(user);
  insertUser(data, (err, results) => {
    if (err) throw err;
    res.json(token, results);
  });
};

//login user

router.post("/users/login", bodyParser.json(), (req, res) => {
  users.loginUser(req, res);
});

// delete a user
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

// update a user
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
