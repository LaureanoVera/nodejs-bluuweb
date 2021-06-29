const { fruits, prices } = require("./fruits");

const cowsay = require('cowsay');
console.log(cowsay.say({
  text: 'Hello lalalala',
  e: '-0',
  T: 'U'
}));

fruits.forEach((item) => {
  console.log(`Fruit: ${item}`);
});

console.log(`Prices: ${prices}`);