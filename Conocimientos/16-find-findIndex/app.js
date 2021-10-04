const personsData = [
  { username: 'Usuario 1', age: 20 },
  { username: 'Usuario 2', age: 30 },
  { username: 'Usuario 3', age: 20 },
];

const user = personsData.find((person) => person.username === 'Usuario 2');
console.log(user);

const userNotFound = personsData.find(
  (person) => person.username === 'Usuario 4'
);
console.log(userNotFound);

const userAge = personsData.find((person) => person.age === 20);
console.log(userAge);

const userAgeIndex = personsData.findIndex((person) => person.age === 30);
console.log(userAgeIndex);
