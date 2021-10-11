const stringNames = 'jorge;ana;pedro;claudia;favio;olenka;juan;carla';
console.log('stringNames', stringNames);

const listNames = stringNames.split(';');
console.log('listNames', listNames);

const listNamesInUpperCase = listNames.map((name) => name.toUpperCase());
console.log('listNamesInUpperCase', listNamesInUpperCase);

const namesWithHypens = listNamesInUpperCase.join('-');
console.log('namesWithHypens', namesWithHypens);

const result = stringNames
  .split(';')
  .map((name) => name.toUpperCase())
  .join('-');
console.log('result', result);

const dataParque =
  'sergio;hidalgo;40;masculino\njavier;luque;24;masculino\nclaudia;ortiz;45;femenino';

const lines = dataParque.split('\n');

const dataPersons = lines.map((line) => line.split(';'));
console.log('dataPersons', dataPersons);

const tabsDataPersons = dataPersons.map((person) => ({
  name: person[0],
  lastname: person[1],
  age: person[2],
  gender: person[3],
}));
console.log('tabsDataPersons', tabsDataPersons);

const resultParque = dataParque
  .split('\n')
  .map((line) => line.split(';'))
  .map((person) => ({
    name: person[0],
    lastname: person[1],
    age: person[2],
    gender: person[3],
  }));
console.log('resultParque', resultParque);

const calculateQuantityByGender = (accum, person) => {
  accum[person.gender] = accum[person.gender] ? accum[person.gender] + 1 : 1;
  /*   if (accum[person.gender]) {
    accum[person.gender]++;
  } else {
    accum[person.gender] = 1;
  } */
  return accum;
};

const quantityByGender = resultParque.reduce(calculateQuantityByGender, {});
console.log('quantityByGender', quantityByGender);

/* const quantityMale = resultParque.reduce((accum, person) => {
  accum += person.gender === 'masculino' ? 1 : 0;
  return accum;
}, 0);
console.log('quantityMale', quantityMale);

const quantityFemale = resultParque.reduce((accum, person) => {
  accum += person.gender === 'femenino' ? 1 : 0;
  return accum;
}, 0);
console.log('quantityFemale', quantityFemale); */
