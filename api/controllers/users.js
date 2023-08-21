const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const User = require('../models/userModels');
const user = new User();

module.exports = {
  getUsers(req, res) {
    try {
      user.getUsers(req, res);
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error);
    }
  },
  getUser(req, res) {
    try {
      user.getUser(req, res);
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error);
    }
  },
  register(req, res) {
    try {
      user.createUser(req, res);
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error)
    }
  },
  login(req, res) {
    try {
      user.login(req, res)
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error)
    }
  },
  updateUser(req, res) {
    try {
      user.updateUser(req, res)
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error)
    }
  },
  deleteUser(req, res) {
    try {
      user.deleteUser(req, res)
    } catch (error) {
      console.log(error);
      res.status(400)
      res.send(error)
    }
  },
}