const pricesWithoutTaxes = [30, 50, 35, 90, 100, 344];
const tax = 0.18;
const pricesWithTaxesIncluded = [];

pricesWithoutTaxes.forEach((price, idx, list) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax), list };
  pricesWithTaxesIncluded.push(priceObj);
});

console.log(pricesWithTaxesIncluded);
