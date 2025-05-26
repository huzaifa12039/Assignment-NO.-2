const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const budgetRoutes = require('./routes/budgetRoutes');

const app = express();

// Connect to MongoDB (without .env)
mongoose.connect('mongodb://127.0.0.1:27017/budgetDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected at 127.0.0.1:27017'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static(path.join(__dirname, 'public'))); // static files (CSS, JS, etc.)
app.set('view engine', 'ejs'); // use EJS as templating engine

// Routes
app.use('/', budgetRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
