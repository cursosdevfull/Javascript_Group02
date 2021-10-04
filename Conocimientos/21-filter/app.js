const personsData = [
  { username: 'Usuario 1', age: 20, gender: 'female' },
  { username: 'Usuario 2', age: 30, gender: 'male' },
  { username: 'Usuario 3', age: 20, gender: 'female' },
];

const usersGT25 = personsData.filter((user) => user.age > 25);
console.log('usersGT25', usersGT25);

const usersEQ20 = personsData.filter((user) => user.age === 20);
console.log('usersEQ20', usersEQ20);

const usersEQ20AndFemale = personsData.filter(
  (user) => user.age === 20 && user.gender === 'female'
);
console.log('usersEQ20AndFemale', usersEQ20AndFemale);

const guessesParty = [
  { name: 'Javier', age: 23 },
  { name: 'Pedro', age: 45 },
  { name: 'Antonio', age: 13 },
  { name: 'Marcela', age: 87 },
  { name: 'Andrea', age: 12 },
];

const listGuessesWithBeer = guessesParty.filter(
  (person) => person.age >= 18 && person.age <= 80
);
console.log('listGuessesWithBeer', listGuessesWithBeer);

const listGuessesWithSoda = guessesParty.filter(
  (person) => person.age < 18 || person.age > 80
);
console.log('listGuessesWithSoda', listGuessesWithSoda);

const listGuessesToVaccum = guessesParty.filter((person) => person.age >= 80);
console.log('listGuessesToVaccum', listGuessesToVaccum);
