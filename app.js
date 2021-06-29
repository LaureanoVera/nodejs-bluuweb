const { fruits, prices } = require("./fruits");

fruits.forEach((item) => {
  console.log(`Fruit: ${item}`);
});

console.log('Prices: ${prices}');