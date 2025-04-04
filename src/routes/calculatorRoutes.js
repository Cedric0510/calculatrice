const express = require('express');
const calculatorController = require('../controllers/calculatorController');

const router = express.Router();

router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);
router.post('/multiply', calculatorController.multiply);
router.post('/divide', calculatorController.divide);
router.post('/percentage', calculatorController.percentage);
router.post('/cos', calculatorController.cos);
router.post('/tan', calculatorController.tan);
router.post('/power', calculatorController.power);

module.exports = router;