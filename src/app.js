const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/calculator', calculatorRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'API Calculatrice opérationnelle' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

module.exports = app;