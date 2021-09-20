const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function calculationResult(calculationType, language) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  console.log('enteredNumber', enteredNumber);
  console.log('language', language);

  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    (!enteredNumber && enteredNumber !== 0)
  ) {
    return;
  }

  if (
    calculationType === 'ADD' ||
    calculationType === 'SUBTRACT' ||
    calculationType === 'MULTIPLY' ||
    calculationType === 'DIVIDE'
  ) {
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function getUserNumberInput() {
  return parseInt(userInput.value);
}

addBtn.addEventListener('click', calculationResult.bind(this, 'ADD', 'EN'));
subtractBtn.addEventListener(
  'click',
  calculationResult.bind(this, 'SUBTRACT', 'EN')
);
multiplyBtn.addEventListener(
  'click',
  calculationResult.bind(this, 'MULTIPLY', 'EN')
);
divideBtn.addEventListener(
  'click',
  calculationResult.bind(this, 'DIVIDE', 'EN')
);
