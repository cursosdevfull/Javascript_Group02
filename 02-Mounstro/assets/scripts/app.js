const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;

const choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackMonsterHandler(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Gané');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Perdí');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Empaté');
  }
}

function attackHandler() {
  attackMonsterHandler('ATTACK');
}

function strongAttackHandler() {
  attackMonsterHandler('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
