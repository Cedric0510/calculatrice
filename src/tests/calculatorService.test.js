const calculatorService = require('../services/calculatorService');

describe('CalculatorService', () => {
  test('add devrait additionner deux nombres', () => {
    expect(calculatorService.add(2, 3)).toBe(5);
    expect(calculatorService.add(-1, 1)).toBe(0);
    expect(calculatorService.add(0, 0)).toBe(0);
  });

  test('subtract devrait soustraire le deuxième nombre du premier', () => {
    expect(calculatorService.subtract(5, 3)).toBe(2);
    expect(calculatorService.subtract(1, 5)).toBe(-4);
    expect(calculatorService.subtract(0, 0)).toBe(0);
  });

  test('multiply devrait multiplier deux nombres', () => {
    expect(calculatorService.multiply(2, 3)).toBe(6);
    expect(calculatorService.multiply(-1, 3)).toBe(-3);
    expect(calculatorService.multiply(0, 5)).toBe(0);
  });

  test('divide devrait diviser le premier nombre par le second', () => {
    expect(calculatorService.divide(6, 3)).toBe(2);
    expect(calculatorService.divide(5, 2)).toBe(2.5);
    expect(calculatorService.divide(0, 5)).toBe(0);
  });

  test('divide devrait lancer une erreur pour la division par zéro', () => {
    expect(() => calculatorService.divide(5, 0)).toThrow('Division par zéro impossible');
  });
  
  test('percentage devrait calculer correctement le pourcentage d\'un nombre', () => {
    expect(calculatorService.percentage(200, 10)).toBe(20);
    expect(calculatorService.percentage(50, 20)).toBe(10);
    expect(calculatorService.percentage(0, 15)).toBe(0);
    expect(calculatorService.percentage(100, 0)).toBe(0);
  });
  
  test('cos devrait calculer correctement le cosinus d\'un angle en degrés', () => {
    expect(calculatorService.cos(0)).toBe(1);
    expect(calculatorService.cos(90)).toBeCloseTo(0, 10);
    expect(calculatorService.cos(180)).toBeCloseTo(-1, 10);
    expect(calculatorService.cos(360)).toBeCloseTo(1, 10);
  });
  
  test('tan devrait calculer correctement la tangente d\'un angle en degrés', () => {
    expect(calculatorService.tan(0)).toBeCloseTo(0, 10);
    expect(calculatorService.tan(45)).toBeCloseTo(1, 10);
    expect(calculatorService.tan(180)).toBeCloseTo(0, 10);
  });
  
  test('tan devrait lancer une erreur pour les angles où la tangente n\'est pas définie', () => {
    expect(() => calculatorService.tan(90)).toThrow('Tangente non définie pour cet angle');
    expect(() => calculatorService.tan(270)).toThrow('Tangente non définie pour cet angle');
  });

  test('power devrait calculer correctement la puissance d\'un nombre', () => {
    expect(calculatorService.power(2, 3)).toBe(8);
    expect(calculatorService.power(5, 2)).toBe(25);
    expect(calculatorService.power(10, 0)).toBe(1);
    expect(calculatorService.power(2, -2)).toBe(0.25);
    expect(calculatorService.power(0, 5)).toBe(0);
  });
  
  test('sqrt devrait calculer correctement la racine carrée d\'un nombre', () => {
    expect(calculatorService.sqrt(4)).toBe(2);
    expect(calculatorService.sqrt(9)).toBe(3);
    expect(calculatorService.sqrt(2)).toBeCloseTo(1.414, 3);
    expect(calculatorService.sqrt(0)).toBe(0);
  });
  
  test('sqrt devrait lancer une erreur pour les nombres négatifs', () => {
    expect(() => calculatorService.sqrt(-1)).toThrow('Impossible de calculer la racine carrée d\'un nombre négatif');
  });
});