const listUsers = [
  { name: 'John', lastName: 'Carter', email: 'john@gmail.com', age: 40 },
  { name: 'Doe', lastName: 'Brad', email: 'doe@gmail.com', age: 50 },
  { name: 'Peter', lastName: 'Reagan', email: 'reagan@gmail.com', age: 34 },
];

const dataUsers = listUsers.map((user) => ({
  name: user.name,
  email: user.email,
  age: user.age,
}));
console.log('listUsers', listUsers);
console.log('dataUsers', dataUsers);

const usersName = listUsers.map((user) => user.name);
console.log('usersName', usersName);

const usersAge = listUsers.map((user) => user.age * 2);
console.log('usersAge', usersAge);

const usersFullName = listUsers.map((user) => ({
  name: user.name,
  email: user.email,
  age: user.age,
  fullname: user.name + ' ' + user.lastName,
}));
console.log('usersFullName', usersFullName);
