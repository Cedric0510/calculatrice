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
});