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
    
    /**
     * Calcule le cosinus d'un angle en degrés
     * @param {number} angle - L'angle en degrés
     * @returns {number} Le cosinus de l'angle
     */
    cos(angle) {
      const radians = (angle * Math.PI) / 180;
      return Math.cos(radians);
    }
    
    /**
     * Calcule la tangente d'un angle en degrés
     * @param {number} angle - L'angle en degrés
     * @returns {number} La tangente de l'angle
     * @throws {Error} Si l'angle correspond à une tangente infinie (90°, 270°, etc.)
     */
    tan(angle) {
      // Normalisation de l'angle à [0, 360)
      const normalizedAngle = ((angle % 360) + 360) % 360;
      
      // Vérification si l'angle est un cas particulier où la tangente n'est pas définie
      if (normalizedAngle === 90 || normalizedAngle === 270) {
        throw new Error('Tangente non définie pour cet angle');
      }
      
      const radians = (angle * Math.PI) / 180;
      return Math.tan(radians);
    }

    /**
     * Calcule la puissance d'un nombre
     * @param {number} base - La base
     * @param {number} exponent - L'exposant
     * @returns {number} Résultat de base élevée à la puissance exponent
     */
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
    
    /**
     * Calcule la racine carrée d'un nombre
     * @param {number} value - Le nombre dont on veut calculer la racine carrée
     * @returns {number} La racine carrée du nombre
     * @throws {Error} Si le nombre est négatif
     */
    sqrt(value) {
      if (value < 0) {
        throw new Error('Impossible de calculer la racine carrée d\'un nombre négatif');
      }
      return Math.sqrt(value);
    }
  }
  
  module.exports = new CalculatorService();