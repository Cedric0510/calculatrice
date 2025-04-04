const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Routes
app.use('/api/calculator', calculatorRoutes);

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur interne est survenue' });
});

// Route pour le health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

module.exports = app;