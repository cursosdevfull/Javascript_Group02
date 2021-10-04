const shoppingCartList = [
  { product: 'pillow', price: 10, category: 'bedroom' },
  { product: 'carpet', price: 50.3, category: 'living room' },
  { product: 'desk', price: 130, category: 'home' },
  { product: 'bed', price: 230, category: 'bedroom' },
];

const total = shoppingCartList.reduce((accum, item) => {
  const subtotal = accum + item.price;
  return subtotal;
}, 0);

console.log('total', total);

const shoppingCartCourses = [
  { title: 'angular', price: 10, author: 'Carlos' },
  { title: 'nodejs', price: 89, author: 'José' },
  { title: 'javascript', price: 23, author: 'Carlos' },
  { title: 'nodejs', price: 59, author: 'Carmen' },
  { title: 'angular', price: 35, author: 'Luis' },
  { title: 'nodejs', price: 78, author: 'Renzo' },
];

const summary = shoppingCartCourses.reduce((accum, course) => {
  if (!accum[course.title]) {
    accum[course.title] = 1;
  } else {
    accum[course.title]++;
  }

  return accum;
}, {});

console.log('summary', summary);
