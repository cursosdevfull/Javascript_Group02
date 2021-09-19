'use strict';

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';

const getPlayerChoice = () => {
  const selection = prompt(
    `Elija ${ROCK}, ${PAPER} o ${SCISSOR}`
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `La selección es ${ROCK}, ${PAPER} o ${SCISSOR}. Hemos escogido ${DEFAULT_USER_CHOICE} por usted.`
    );
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSOR;
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === ROCK && cChoice === SCISSOR) ||
      (pChoice === PAPER && cChoice === ROCK) ||
      (pChoice === SCISSOR && cChoice === PAPER)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;

let gameIsRunning = false;

startBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);

  let message = `Su elección: ${playerChoice}, la elección de la computadora: ${computerChoice}. Resultado = `;
  message +=
    winner === RESULT_DRAW
      ? 'Empate'
      : winner === RESULT_PLAYER_WIN
      ? 'Usted ganó'
      : 'La computadora ganó';

  alert(message);

  gameIsRunning = false;
});
