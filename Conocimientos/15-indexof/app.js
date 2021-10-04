const testResults = [1, 3.3, 1.5, 4.8, 6];
const storedResults = testResults.concat([5, 6, 7], [8, 9, 10]);
console.log(storedResults);

console.log('4.8', testResults.indexOf(4.8));
console.log('90', testResults.indexOf(90));
console.log('1', testResults.indexOf(1));
