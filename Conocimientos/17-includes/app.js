const userRoles = ['ADMIN', 'OPERATOR'];

const isUserAuthorized1 = userRoles.includes('ADMIN');
console.log(isUserAuthorized1);

const isUserAuthorized2 = userRoles.includes('SUPER');
console.log(isUserAuthorized2);
