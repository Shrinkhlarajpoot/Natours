const express = require('express');
const userController = require('../controllers/userController');
const Router = express.Router();
Router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
Router.route('/:id')
  .get(userController.getSingleUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = Router;
