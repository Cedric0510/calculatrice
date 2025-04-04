const calculationRepository = require('../repositories/calculRepository');
const { getConnection } = require('../config/database');

// Mock pour la connexion à la base de données
jest.mock('../config/database', () => ({
  getConnection: jest.fn()
}));

describe('CalculationRepository', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('saveCalculation devrait enregistrer un calcul et retourner les données', async () => {
    // Préparation des mocks
    const mockRelease = jest.fn();
    const mockQuery = jest.fn().mockResolvedValue({ insertId: 1 });
    const mockConnection = {
      query: mockQuery,
      release: mockRelease
    };
    
    getConnection.mockResolvedValue(mockConnection);
    
    // Données de test
    const operation = 'add';
    const parameters = { a: 2, b: 3 };
    const result = 5;
    
    // Exécution
    const savedCalculation = await calculationRepository.saveCalculation(operation, parameters, result);
    
    // Vérifications
    expect(mockQuery).toHaveBeenCalledWith(
      expect.stringContaining('INSERT INTO calculations'),
      [operation, JSON.stringify(parameters), result]
    );
    expect(mockRelease).toHaveBeenCalled();
    expect(savedCalculation).toEqual(expect.objectContaining({
      id: 1,
      operation,
      parameters,
      result,
      timestamp: expect.any(Date)
    }));
  });

  test('saveCalculation devrait propager l\'erreur en cas d\'échec', async () => {
    // Préparation des mocks avec une erreur
    const mockError = new Error('DB error');
    const mockRelease = jest.fn();
    const mockQuery = jest.fn().mockRejectedValue(mockError);
    const mockConnection = {
      query: mockQuery,
      release: mockRelease
    };
    
    getConnection.mockResolvedValue(mockConnection);
    
    // Données de test
    const operation = 'add';
    const parameters = { a: 2, b: 3 };
    const result = 5;
    
    // Vérification que l'erreur est propagée
    await expect(calculationRepository.saveCalculation(operation, parameters, result))
      .rejects.toThrow('DB error');
      
    // Vérifications
    expect(mockQuery).toHaveBeenCalled();
    expect(mockRelease).toHaveBeenCalled();

  });
  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); 
  });
});