const persona = {
  name: 'Sergio',
  age: 40,
  gender: 'male',
};

console.log('objecto persona', persona);

class Persona {
  name;
  age;
  gender;

  constructor(namePersona, agePersona, genderPersona) {
    this.name = namePersona;
    this.age = agePersona;
    this.gender = genderPersona;
  }
}

const person = new Persona('Sergio', 40, 'male');
console.log('clase person', person);

class MiniShop {
  title = 'Mi tienda';
  description = 'Tienda online';

  constructor(locationMiniShop) {
    this.location = locationMiniShop;
    this.title = 'Mini Shop';
  }

  getLocation() {
    return this.location;
  }
}

const miniShop = new MiniShop('Lima Perú');
console.log('title', miniShop.title);
console.log('location', miniShop.getLocation());

const miniTienda = new MiniShop('Arequipa Perú');
console.log('title', miniTienda.title);
