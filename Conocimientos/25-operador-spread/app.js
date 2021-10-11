const listNames = ['Claudia', 'Carlos', 'José']; // Claudia, Carlos, José
const listNamesCopyFake = listNames;
const listNamesCopyReal = [...listNames];

listNamesCopyFake.push('Alondra');

console.log('listNames', listNames);
console.log('listNamesCopyFake', listNamesCopyFake);
console.log('listNamesCopyReal', listNamesCopyReal);

const prices = [20, 60, 45, 45, 89, 34];
prices.push(200);
prices.push(10);

const priceHighest = Math.max(...prices);
const priceLowest = Math.min(...prices);
console.log('priceHighest', priceHighest);
console.log('priceLowest', priceLowest);

const namesMen = ['Pedro', 'Anibal', 'Víctor'];
const namesWomen = ['Carla', 'Mariela', 'Andrea', 'Adriana'];
const names = [...namesMen, ...namesWomen].sort();
console.log('names', names);
const namesConcated = namesMen.concat(namesWomen).sort();
console.log('namesConcated', namesConcated);
