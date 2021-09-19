/* const sum = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(sum(10, 20, 30, 40, 50, 60)); */

/* const sum = (numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }
  return accum;
};

console.log(sum([10, 20, 30, 40, 50, 60, 70])); */

/* const sum = (...numbers) => {
  let accum = 0;
  for (const number of numbers) {
    accum += number;
  }
  return accum;
};

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80)); */

const authorization = (...rolesAllowed) => {
  const rolesUser = ['OPERATOR', 'AUDITOR'];
  let userAuthorized = false;

  for (const role of rolesAllowed) {
    if (rolesUser.indexOf(role) > -1) {
      userAuthorized = true;
    }
  }

  return userAuthorized;
};

console.log(authorization('ADMIN', 'AUDITOR'));
