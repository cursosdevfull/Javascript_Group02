const listUsers = [
  { name: 'John', lastName: 'Carter', email: 'john@gmail.com', age: 40 },
  { name: 'Doe', lastName: 'Brad', email: 'doe@gmail.com', age: 50 },
  { name: 'Peter', lastName: 'Reagan', email: 'reagan@gmail.com', age: 34 },
];

const usersSortedByAge = listUsers.sort((user1, user2) => {
  return user2.age - user1.age;
  /* if (user1.age > user2.age) {
    return 1;
  } else if (user1.age === user2.age) {
    return 0;
  } else {
    return -1;
  } */
});

console.log('usersSortedByAge', usersSortedByAge);

/* const usersSortedByName = listUsers.sort((user1, user2) => {
  if (user1.name > user2.name) {
    return 1;
  } else {
    return -1;
  }
}); */
const usersSortedByName = listUsers.sort((user1, user2) =>
  user1.name > user2.name ? 1 : -1
);
console.log('usersSortedByName', usersSortedByName);
