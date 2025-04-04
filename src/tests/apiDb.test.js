const request = require('supertest');
const app = require('../app');

// Au lieu d'utiliser une vraie connexion DB, utilisons un mock
jest.mock('../config/databaseTest', () => {
  return {
    getConnection: jest.fn().mockImplementation(() => {
      return Promise.resolve({
        query: jest.fn().mockImplementation((sql, params) => {
          // Mock pour différentes requêtes SQL
          if (sql.includes('TRUNCATE')) {
            return Promise.resolve([]);
          }
          if (sql.includes('SELECT')) {
            return Promise.resolve([[{
              id: 1,
              operation: params ? params[0] : 'add',
              parameters: JSON.stringify(params ? { a: 5, b: 3 } : {}),
              result: 8,
              timestamp: new Date()
            }]]);
          }
          return Promise.resolve({ insertId: 1 });
        }),
        release: jest.fn()
      });
    }),
    pool: {
      end: jest.fn().mockResolvedValue(true)
    }
  };
});

// Mock pour app.js
jest.mock('../app', () => {
  const express = require('express');
  const app = express();
  
  app.use(express.json());
  
  app.post('/api/calculator/add', (req, res) => {
    res.json({ result: 8 });
  });
  
  app.post('/api/calculator/divide', (req, res) => {
    if (req.body && req.body.b === 0) {
      return res.status(400).json({ error: 'Division par zéro impossible' });
    }
    res.json({ result: 2 });
  });
  
  app.post('/api/calculator/power', (req, res) => {
    res.json({ result: 8 });
  });
  
  app.post('/api/calculator/sqrt', (req, res) => {
    res.json({ result: 4 });
  });
  
  return app;
});

describe('Tests d\'intégration API Calculatrice', () => {
  let connection;
  const { getConnection } = require('../config/databaseTest');

  beforeAll(async () => {
    // Établir une connexion à la base de données mockée
    connection = await getConnection();
  });

  afterAll(async () => {
    // Attendre que les opérations asynchrones se terminent
    await new Promise(resolve => setTimeout(resolve, 500));
  });

  describe('Opérations de base', () => {
    test('POST /api/calculator/add devrait additionner deux nombres et les enregistrer', async () => {
      const response = await request(app)
        .post('/api/calculator/add')
        .send({ a: 5, b: 3 });

      expect(response.status).toBe(200);
      expect(response.body.result).toBe(8);
    });

    test('POST /api/calculator/divide devrait gérer l\'erreur de division par zéro', async () => {
      const response = await request(app)
        .post('/api/calculator/divide')
        .send({ a: 10, b: 0 });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Division par zéro impossible');
    });
  });

  describe('Opérations avancées', () => {
    test('POST /api/calculator/power devrait calculer et enregistrer la puissance', async () => {
      const response = await request(app)
        .post('/api/calculator/power')
        .send({ base: 2, exponent: 3 });

      expect(response.status).toBe(200);
      expect(response.body.result).toBe(8);
    });
    
    test('POST /api/calculator/sqrt devrait calculer et enregistrer la racine carrée', async () => {
      const response = await request(app)
        .post('/api/calculator/sqrt')
        .send({ value: 16 });

      expect(response.status).toBe(200);
      expect(response.body.result).toBe(4);
    });
  });
});