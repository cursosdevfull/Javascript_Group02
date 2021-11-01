const suma = require('./suma');

test('sumar dos números positivos', () => {
  // Preparación
  const sumando1 = 10;
  const sumando2 = 7;

  // Ejecución
  const result = suma(sumando1, sumando2);

  // Comprobación
  expect(result).toBe(17);
});

test('sumar dos números negativos', () => {
  const sumando1 = -2;
  const sumando2 = -8;

  const result = suma(sumando1, sumando2);

  expect(result).toBe(-10);
});

test('sumar un positivo y un negativo', () => {
  const sumando1 = -20;
  const sumando2 = 45;

  const result = suma(sumando1, sumando2);

  expect(result).toBe(25);
});
