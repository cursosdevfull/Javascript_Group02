const ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 15;

const choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);
