class CalculatorService {
    /**
     * Effectue une addition
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de l'addition
     */
    add(a, b) {
      return a + b;
    }
  
    /**
     * Effectue une soustraction
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de la soustraction
     */
    subtract(a, b) {
      return a - b;
    }
  
    /**
     * Effectue une multiplication
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de la multiplication
     */
    multiply(a, b) {
      return a * b;
    }
  
    /**
     * Effectue une division
     * @param {number} a - Numérateur
     * @param {number} b - Dénominateur
     * @returns {number|string} Résultat de la division ou message d'erreur
     */
    divide(a, b) {
      if (b === 0) {
        throw new Error('Division par zéro impossible');
      }
      return a / b;
    }
    
    /**
     * Calcule le pourcentage d'un nombre
     * @param {number} value - Le nombre dont on veut calculer le pourcentage
     * @param {number} percent - Le pourcentage à appliquer
     * @returns {number} Résultat du calcul du pourcentage
     */
    percentage(value, percent) {
      return (value * percent) / 100;
    }
  }
  
  module.exports = new CalculatorService();