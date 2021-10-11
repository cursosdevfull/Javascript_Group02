const dataParque =
  'sergio;hidalgo;40;masculino\njavier;luque;24;masculino\nclaudia;ortiz;45;femenino';

const resultParque = dataParque
  .split('\n')
  .map((line) => line.split(';'))
  .map((person) => {
    const [name, lastname, age, gender] = person; // ["sergio", "hidalgo", 40, "masculino"]
    return { name, lastname, age, gender, fullname: name + ' ' + lastname };
  });
console.log('resultParque', resultParque);
