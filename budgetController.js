const Budget = require('../models/Budget');

exports.getAllBudgets = async (req, res) => {
  const budgets = await Budget.find().sort({ date: -1 });
  res.render('index', { budgets });
};

exports.getAddForm = (req, res) => {
  res.render('add');
};

exports.addBudget = async (req, res) => {
  const { title, amount } = req.body;
  await Budget.create({ title, amount });
  res.redirect('/');
};

exports.deleteBudget = async (req, res) => {
  await Budget.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
