const calculatorService = require('../services/calculatorService');

class CalculatorController {

  add(req, res) {
    try {
      const { a, b } = req.body;
      
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.add(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  subtract(req, res) {
    try {
      const { a, b } = req.body;
      
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.subtract(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  multiply(req, res) {
    try {
      const { a, b } = req.body;
      
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.multiply(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  divide(req, res) {
    try {
      const { a, b } = req.body;
      
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.divide(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  percentage(req, res) {
    try {
      const { value, percent } = req.body;
      
      if (typeof value !== 'number' || typeof percent !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.percentage(value, percent);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  

  cos(req, res) {
    try {
      const { angle } = req.body;
      
      if (typeof angle !== 'number') {
        return res.status(400).json({ error: 'Le paramètre doit être un nombre' });
      }
      
      const result = calculatorService.cos(angle);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  tan(req, res) {
    try {
      const { angle } = req.body;
      
      if (typeof angle !== 'number') {
        return res.status(400).json({ error: 'Le paramètre doit être un nombre' });
      }
      
      const result = calculatorService.tan(angle);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  power(req, res) {
    try {
      const { base, exponent } = req.body;
      
      if (typeof base !== 'number' || typeof exponent !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.power(base, exponent);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CalculatorController();