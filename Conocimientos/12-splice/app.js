const hobbies = ['Cantar', 'Bailar', 'Cocinar', 'Aprender'];
hobbies[0] = 'Cultivar';
hobbies[5] = 'Leer';

console.log(hobbies, hobbies[5], hobbies[4]);
console.log(hobbies.length);

hobbies.splice(1, 0, 'Buena comida');
console.log(hobbies);

const elementosEliminados = hobbies.splice(-5, 1);
console.log(elementosEliminados);
console.log(hobbies);
