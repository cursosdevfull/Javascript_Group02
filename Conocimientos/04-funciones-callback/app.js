/* const showResult = (total, language) => {
  let message = language === 'en' ? 'Result: ' : 'El resultado: ';
  message += total;
  alert(message);
}; */

const showResultES = (total) => {
  const message = `El resultado es ${total}`;
  alert(message);
};

const showResultEN = (total) => {
  const message = `Result is ${total}`;
  alert(message);
};

const sum = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum += validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

const subtract = (resultHandler, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accum = 0;
  for (const number of numbers) {
    accum -= validateNumber(number);
  }

  resultHandler(accum);

  return accum;
};

sum(showResultES, 10, 20, 30);
subtract(showResultEN, 10, 20, 30);
