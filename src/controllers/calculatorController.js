const calculatorService = require('../services/calculatorService');

class CalculatorController {
  /**
   * Gère la requête d'addition
   */
  async add(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.add(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de soustraction
   */
  async subtract(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.subtract(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de multiplication
   */
  async multiply(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.multiply(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de division
   */
  async divide(req, res) {
    try {
      const { a, b } = req.body;
      
      // Validation des paramètres
      if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.divide(a, b);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de calcul de pourcentage
   */
  async percentage(req, res) {
    try {
      const { value, percent } = req.body;
      
      // Validation des paramètres
      if (typeof value !== 'number' || typeof percent !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.percentage(value, percent);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de calcul du cosinus
   */
  async cos(req, res) {
    try {
      const { angle } = req.body;
      
      // Validation du paramètre
      if (typeof angle !== 'number') {
        return res.status(400).json({ error: 'Le paramètre doit être un nombre' });
      }
      
      const result = await calculatorService.cos(angle);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de calcul de la tangente
   */
  async tan(req, res) {
    try {
      const { angle } = req.body;
      
      // Validation du paramètre
      if (typeof angle !== 'number') {
        return res.status(400).json({ error: 'Le paramètre doit être un nombre' });
      }
      
      const result = await calculatorService.tan(angle);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * Gère la requête de calcul de puissance
   */
  async power(req, res) {
    try {
      const { base, exponent } = req.body;
      
      // Validation des paramètres
      if (typeof base !== 'number' || typeof exponent !== 'number') {
        return res.status(400).json({ error: 'Les paramètres doivent être des nombres' });
      }
      
      const result = await calculatorService.power(base, exponent);
      return res.json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  /**
   * Gère la requête de calcul de racine carrée
   */
  async sqrt(req, res) {
    try {
      const { value } = req.body;
      
      // Validation du paramètre
      if (typeof value !== 'number') {
        return res.status(400).json({ error: 'Le paramètre doit être un nombre' });
      }
      
      const result = await calculatorService.sqrt(value);
      return res.json({ result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CalculatorController();