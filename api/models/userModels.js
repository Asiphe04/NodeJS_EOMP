//Import database connection
const db = require("../config/db");

//Get products
const getUsers = (result) => {
  db.query(
    "SELECT userID, firstName, lastName, userAge , Gender , userRole, emailAdd, userPass, userProfile FROM users",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
//Get a single user

const getUserByID = (id, result) => {
  const query =
    "SELECT userID, firstName, lastName, userAge , Gender, userRole, emailAdd, userPass, userProfile FROM users WHERE userID = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.log("Error executing query:", query);
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//Add a new product
const insertUser = (data, result) => {
  db.query("INSERT INTO users SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update an existing product
const updateUserByID = (id, data, result) => {
  db.query(
    "UPDATE users SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ? , emailAdd = ? , userPass = ? , userProfile = ? WHERE userID = ?",
    [
      data.firstName,
      data.lastName,
      data.userAge,
      data.Gender,
      data.userRole,
      data.emailAdd,
      data.userPass,
      data.userProfile,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result({ error: "Failed to update user." }, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete a product
const deleteUserByID = (id, result) => {
  db.query("DELETE FROM users WHERE userID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = {
  getUsers,
  getUserByID,
  insertUser,
  updateUserByID,
  deleteUserByID,
};
