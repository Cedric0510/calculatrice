const mariadb = require('mariadb');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "password";
const DB_NAME = process.env.DB_NAME || "calculator_db";
const DB_PORT = parseInt(process.env.DB_PORT || '3306', 10);

// Configuration de la connexion à la base de données
const pool = mariadb.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    bigIntAsNumber: true,
    connectionLimit: 5
});

// Fonction utilitaire pour obtenir une connexion
async function getConnection() {
    try {
        return await pool.getConnection();
    } catch (error) {
        console.error('Erreur de connexion à la base de données:', error);
        throw error;
    }
}

module.exports = {
    pool,
    getConnection
};