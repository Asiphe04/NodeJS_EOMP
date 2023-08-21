const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

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

module.exports = router;
