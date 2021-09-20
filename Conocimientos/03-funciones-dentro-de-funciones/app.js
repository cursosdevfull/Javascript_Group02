const sum = (...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum += validateNumber(number);
  }

  return accum;
};

console.log(sum(10, 20, 30, 'hola', false, 40, 50));

/* console.log(validateNumber(500)); */
