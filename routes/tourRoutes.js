const express = require('express');
const tourController = require('../controllers/tourController');
const Router = express.Router();
Router.param('id',tourController.checkId)
Router.route('/').get(tourController.getTour).post(tourController.postTour);
Router.route('/:id')
  .get(tourController.getSingleTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
