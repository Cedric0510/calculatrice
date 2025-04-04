const { getConnection } = require('../config/database');

class CalculationRepository {
  /**
   * Enregistre un calcul dans la base de données
   * @param {string} operation - Type d'opération (add, subtract, etc.)
   * @param {Object} parameters - Paramètres de l'opération
   * @param {number} result - Résultat du calcul
   * @returns {Promise<Object>} Les données du calcul enregistré, y compris son ID
   */
  async saveCalculation(operation, parameters, result) {
    let connection;
    try {
      connection = await getConnection();
      
      const query = `
        INSERT INTO calculations (operation, parameters, result)
        VALUES (?, ?, ?)
      `;
      
      const parametersJson = JSON.stringify(parameters);
      const res = await connection.query(query, [operation, parametersJson, result]);
      
      return {
        id: res.insertId,
        operation,
        parameters,
        result,
        timestamp: new Date()
      };
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du calcul:', error);
      throw error;
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = new CalculationRepository();