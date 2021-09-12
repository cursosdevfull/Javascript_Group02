const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;
const HEALTH_VALUE = 20;
const MAX_LIFE = 100;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEALTH = 'PLAYER_HEALTH';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt(
  'Ingrese el máximo de vida para el jugador y para el mounstro',
  '100'
);
let choseMaxLife = parseInt(enteredValue);

if (isNaN(choseMaxLife) || choseMaxLife <= 0) {
  choseMaxLife = MAX_LIFE;
}

let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;

const battleLog = [];

adjustHealthBars(choseMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  const logEntry = {
    event,
    value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };

  if (
    event === LOG_EVENT_PLAYER_ATTACK ||
    event === LOG_EVENT_PLAYER_STRONG_ATTACK
  ) {
    logEntry.target = 'MONSTER';
  }

  if (event === LOG_EVENT_MONSTER_ATTACK || event === LOG_EVENT_PLAYER_HEALTH) {
    logEntry.target = 'PLAYER';
  }

  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = choseMaxLife;
  currentPlayerHealth = choseMaxLife;
  hasBonusLife = true;
  resetGame(choseMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert('Murió pero la cura lo revivió');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Gané');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'JUGADOR GANÓ',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Perdí');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'JUGADOR PERDIÓ',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Empaté');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'JUGADOR EMPATÓ',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (
    (currentMonsterHealth <= 0 && currentPlayerHealth > 0) ||
    (currentPlayerHealth <= 0 && currentMonsterHealth > 0) ||
    (currentMonsterHealth <= 0 && currentPlayerHealth <= 0)
  ) {
    reset();
  }
}

function attackMonsterHandler(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const eventTypeAttack =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    eventTypeAttack,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function attackHandler() {
  attackMonsterHandler(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonsterHandler(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0 || !hasBonusLife) {
    return;
  }

  hasBonusLife = false;
  removeBonusLife();

  let healthValue;
  if (currentPlayerHealth >= choseMaxLife - HEALTH_VALUE) {
    alert('No puedes tener más cura que el máximo de salud');
    healthValue = choseMaxLife - currentPlayerHealth;
  } else {
    healthValue = HEALTH_VALUE;
  }

  currentPlayerHealth += healthValue;
  increasePlayerHealth(healthValue);
  writeToLog(
    LOG_EVENT_PLAYER_HEALTH,
    healthValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
