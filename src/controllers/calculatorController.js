const calculatorService = require('../services/calculatorService');

/**
 * Contrôleur pour les opérations de calculatrice
 */
class CalculatorController {
  /**
   * Gère la requête d'addition
   */
  add(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.add(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de soustraction
   */
  subtract(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.subtract(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de multiplication
   */
  multiply(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.multiply(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de division
   */
  divide(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = calculatorService.divide(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CalculatorController();