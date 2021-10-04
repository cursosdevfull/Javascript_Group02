const shoppingCartList = [
  { product: 'pillow', price: 10, category: 'bedroom' },
  { product: 'carpet', price: 50.3, category: 'living room' },
  { product: 'desk', price: 130, category: 'home' },
  { product: 'bed', price: 230, category: 'bedroom' },
];

/* const listFilterBedroom = shoppingCartList.filter(
  (item) => item.category === 'bedroom'
);
const total = listFilterBedroom.reduce((accum, item) => accum + item.price, 0); */

const filterByCategoryBedroom = (item) => item.category === 'bedroom';
const sumPrices = (accum, item) => accum + item.price;

const total = shoppingCartList
  .filter(filterByCategoryBedroom)
  .reduce(sumPrices, 0);

console.log('total', total);
