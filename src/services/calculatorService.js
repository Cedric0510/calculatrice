const calculationRepository = require('../repositories/calculRepository');

class CalculatorService {
    /**
     * Effectue une addition
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de l'addition
     */
    async add(a, b) {
      const result = a + b;
      
      try {
        await calculationRepository.saveCalculation('add', { a, b }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
  
    /**
     * Effectue une soustraction
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de la soustraction
     */
    async subtract(a, b) {
      const result = a - b;
      
      try {
        await calculationRepository.saveCalculation('subtract', { a, b }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }

    /**
     * Effectue une multiplication
     * @param {number} a - Premier nombre
     * @param {number} b - Deuxième nombre
     * @returns {number} Résultat de la multiplication
     */
    async multiply(a, b) {
      const result = a * b;
      
      try {
        await calculationRepository.saveCalculation('multiply', { a, b }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }

    /**
     * Effectue une division
     * @param {number} a - Numérateur
     * @param {number} b - Dénominateur
     * @returns {number|string} Résultat de la division ou message d'erreur
     */
    async divide(a, b) {
      if (b === 0) {
        throw new Error('Division par zéro impossible');
      }
      const result = a / b;
      
      try {
        await calculationRepository.saveCalculation('divide', { a, b }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
    
    /**
     * Calcule le pourcentage d'un nombre
     * @param {number} value - Le nombre dont on veut calculer le pourcentage
     * @param {number} percent - Le pourcentage à appliquer
     * @returns {number} Résultat du calcul du pourcentage
     */
    async percentage(value, percent) {
      const result = (value * percent) / 100;
      
      try {
        await calculationRepository.saveCalculation('percentage', { value, percent }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
    
    /**
     * Calcule le cosinus d'un angle en degrés
     * @param {number} angle - L'angle en degrés
     * @returns {number} Le cosinus de l'angle
     */
    async cos(angle) {
      const radians = (angle * Math.PI) / 180;
      const result = Math.cos(radians);
      
      try {
        await calculationRepository.saveCalculation('cos', { angle }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
    
    /**
     * Calcule la tangente d'un angle en degrés
     * @param {number} angle - L'angle en degrés
     * @returns {number} La tangente de l'angle
     * @throws {Error} Si l'angle correspond à une tangente non définie
     */
    async tan(angle) {
      // Normalisation de l'angle à [0, 360)
      const normalizedAngle = ((angle % 360) + 360) % 360;
      
      // Vérification si l'angle est un cas particulier où la tangente n'est pas définie
      if (normalizedAngle === 90 || normalizedAngle === 270) {
        throw new Error('Tangente non définie pour cet angle');
      }
      
      const radians = (angle * Math.PI) / 180;
      const result = Math.tan(radians);
      
      try {
        await calculationRepository.saveCalculation('tan', { angle }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
    
    /**
     * Calcule la puissance d'un nombre
     * @param {number} base - La base
     * @param {number} exponent - L'exposant
     * @returns {number} Résultat de base élevée à la puissance exponent
     */
    async power(base, exponent) {
      const result = Math.pow(base, exponent);
      
      try {
        await calculationRepository.saveCalculation('power', { base, exponent }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
    
    /**
     * Calcule la racine carrée d'un nombre
     * @param {number} value - Le nombre dont on veut calculer la racine carrée
     * @returns {number} La racine carrée du nombre
     * @throws {Error} Si le nombre est négatif
     */
    async sqrt(value) {
      if (value < 0) {
        throw new Error('Impossible de calculer la racine carrée d\'un nombre négatif');
      }
      
      const result = Math.sqrt(value);
      
      try {
        await calculationRepository.saveCalculation('sqrt', { value }, result);
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du calcul:', error);
      }
      
      return result;
    }
  }
  
  module.exports = new CalculatorService();