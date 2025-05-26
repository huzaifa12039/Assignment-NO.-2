const express = require('express');
const router = express.Router();
const controller = require('../controllers/budgetController');

router.get('/', controller.getAllBudgets);
router.get('/add', controller.getAddForm);
router.post('/add', controller.addBudget);
router.get('/delete/:id', controller.deleteBudget);

module.exports = router;
