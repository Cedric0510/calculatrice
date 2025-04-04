const calculatorService = require('../services/calculatorService');
const calculationRepository = require('../repositories/calculRepository');

// Mock du repository
jest.mock('../repositories/calculRepository');

describe('CalculatorService', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    jest.clearAllMocks();
    calculationRepository.saveCalculation.mockResolvedValue({});
  });

  test('add devrait additionner deux nombres et sauvegarder le calcul', async () => {
    const result = await calculatorService.add(2, 3);
    expect(result).toBe(5);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('add', { a: 2, b: 3 }, 5);
  });

  test('subtract devrait soustraire le deuxième nombre du premier et sauvegarder le calcul', async () => {
    const result = await calculatorService.subtract(5, 3);
    expect(result).toBe(2);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('subtract', { a: 5, b: 3 }, 2);
  });

  test('multiply devrait multiplier deux nombres et sauvegarder le calcul', async () => {
    const result = await calculatorService.multiply(2, 3);
    expect(result).toBe(6);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('multiply', { a: 2, b: 3 }, 6);
  });

  test('divide devrait diviser le premier nombre par le second et sauvegarder le calcul', async () => {
    const result = await calculatorService.divide(6, 3);
    expect(result).toBe(2);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('divide', { a: 6, b: 3 }, 2);
  });

  test('divide devrait lancer une erreur pour la division par zéro', async () => {
    await expect(calculatorService.divide(5, 0)).rejects.toThrow('Division par zéro impossible');
    expect(calculationRepository.saveCalculation).not.toHaveBeenCalled();
  });
  
  test('percentage devrait calculer correctement le pourcentage d\'un nombre et sauvegarder le calcul', async () => {
    const result = await calculatorService.percentage(200, 10);
    expect(result).toBe(20);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('percentage', { value: 200, percent: 10 }, 20);
  });
  
  test('cos devrait calculer correctement le cosinus d\'un angle en degrés et sauvegarder le calcul', async () => {
    const result = await calculatorService.cos(0);
    expect(result).toBe(1);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('cos', { angle: 0 }, 1);
  });
  
  test('tan devrait calculer correctement la tangente d\'un angle en degrés et sauvegarder le calcul', async () => {
    const result = await calculatorService.tan(45);
    expect(result).toBeCloseTo(1, 10);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('tan', { angle: 45 }, expect.any(Number));
  });
  
  test('tan devrait lancer une erreur pour les angles où la tangente n\'est pas définie', async () => {
    await expect(calculatorService.tan(90)).rejects.toThrow('Tangente non définie pour cet angle');
    expect(calculationRepository.saveCalculation).not.toHaveBeenCalled();
  });

  test('power devrait calculer correctement la puissance d\'un nombre et sauvegarder le calcul', async () => {
    const result = await calculatorService.power(2, 3);
    expect(result).toBe(8);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('power', { base: 2, exponent: 3 }, 8);
  });
  
  test('sqrt devrait calculer correctement la racine carrée d\'un nombre et sauvegarder le calcul', async () => {
    const result = await calculatorService.sqrt(4);
    expect(result).toBe(2);
    expect(calculationRepository.saveCalculation).toHaveBeenCalledWith('sqrt', { value: 4 }, 2);
  });
  
  test('sqrt devrait lancer une erreur pour les nombres négatifs', async () => {
    await expect(calculatorService.sqrt(-1)).rejects.toThrow('Impossible de calculer la racine carrée d\'un nombre négatif');
    expect(calculationRepository.saveCalculation).not.toHaveBeenCalled();
  });
  
  test('les méthodes du service devraient continuer à fonctionner même si la sauvegarde échoue', async () => {
    // Simuler une erreur lors de la sauvegarde
    calculationRepository.saveCalculation.mockRejectedValue(new Error('DB error'));
    
    // Le service devrait gérer l'erreur et retourner le résultat correct
    const result = await calculatorService.add(2, 3);
    expect(result).toBe(5);
  });
  afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); 
  });
});