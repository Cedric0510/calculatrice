const mariadb = require('mariadb');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config({ path: '.env.test' });

async function setupTestDatabase() {
  const DB_HOST = process.env.DB_HOST || "localhost";
  const DB_PORT = parseInt(process.env.DB_PORT || '3306', 10);
  const ROOT_USER = process.env.MARIADB_ROOT_USER || "root";
  const ROOT_PASSWORD = process.env.MARIADB_ROOT_PASSWORD || "root_password";
  const TEST_DB = process.env.DB_NAME || "calculator_test_db";
  const TEST_USER = process.env.DB_USER || "calculator_test_user";
  const TEST_PASSWORD = process.env.DB_PASSWORD || "password";

  let rootConnection;

  try {
    // Connexion en tant que root
    rootConnection = await mariadb.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: ROOT_USER,
      password: ROOT_PASSWORD,
      bigIntAsNumber: true
    });

    console.log('Connexion à MariaDB réussie en tant que root');

    // Créer la base de données de test
    await rootConnection.query(`CREATE DATABASE IF NOT EXISTS ${TEST_DB}`);
    console.log(`Base de données ${TEST_DB} créée ou existante`);

    // Créer l'utilisateur de test
    try {
      await rootConnection.query(`CREATE USER IF NOT EXISTS '${TEST_USER}'@'%' IDENTIFIED BY '${TEST_PASSWORD}'`);
      console.log(`Utilisateur ${TEST_USER} créé ou existant`);
    } catch (error) {
      if (!error.message.includes('already exists')) {
        throw error;
      }
    }

    // Accorder les privilèges
    await rootConnection.query(`GRANT ALL PRIVILEGES ON ${TEST_DB}.* TO '${TEST_USER}'@'%'`);
    await rootConnection.query('FLUSH PRIVILEGES');
    console.log(`Privilèges accordés à ${TEST_USER} sur ${TEST_DB}`);

    // Se connecter à la base de données de test
    const testConnection = await mariadb.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: TEST_USER,
      password: TEST_PASSWORD,
      database: TEST_DB,
      bigIntAsNumber: true
    });

    console.log('Connexion à la base de données de test réussie');

    // Créer la table calculations
    await testConnection.query(`
      CREATE TABLE IF NOT EXISTS calculations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        operation VARCHAR(50) NOT NULL,
        parameters JSON NOT NULL,
        result DOUBLE NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Créer les index
    await testConnection.query('CREATE INDEX IF NOT EXISTS idx_operation ON calculations (operation)');
    await testConnection.query('CREATE INDEX IF NOT EXISTS idx_timestamp ON calculations (timestamp)');

    console.log('Table et index créés dans la base de données de test');

    // Fermer les connexions
    await testConnection.end();
    console.log('Configuration de la base de données de test terminée avec succès');

  } catch (error) {
    console.error('Erreur lors de la configuration de la base de données de test:', error);
    process.exit(1);
  } finally {
    if (rootConnection) {
      await rootConnection.end();
    }
  }
}

setupTestDatabase();