const express = require('express');
const tourController = require('../controllers/tourcontrollers');
const Router = express.Router();

Router.param('id', tourController.checkId);

Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
