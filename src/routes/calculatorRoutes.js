const express = require('express');
const calculatorController = require('../controllers/calculatorController');

const router = express.Router();
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);



router.post('/add', asyncHandler(calculatorController.add));
router.post('/subtract', asyncHandler(calculatorController.subtract));
router.post('/multiply', asyncHandler(calculatorController.multiply));
router.post('/divide', asyncHandler(calculatorController.divide));
router.post('/percentage', asyncHandler(calculatorController.percentage));
router.post('/cos', asyncHandler(calculatorController.cos));
router.post('/tan', asyncHandler(calculatorController.tan));
router.post('/power', asyncHandler(calculatorController.power));
router.post('/sqrt', asyncHandler(calculatorController.sqrt));

module.exports = router;