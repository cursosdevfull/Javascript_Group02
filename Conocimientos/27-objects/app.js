const person = {
  name: 'Sergio',
  'name and lastname': 'Sergio Hidalgo',
  age: 40,
  hobbies: ['cocinar', 'estudiar', 'cultivar'],
  greet: function () {
    alert('Hola');
  },
  meet: () => alert('New meet by Zoom'),
  bye() {
    alert('bye bye');
  },
  21: 'juego de cartas',
};

console.log('person', person);
person.greet();
person.meet();
person.bye();
console.log('21', person['21']);
console.log('21', person[21]);

Object.freeze(person);

person['age'] = 20;

delete person.age;
console.log('age deleted', person);

person.isAdmin = true;
console.log('person with a new property', person);
