const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");
products.forEach(function (product) {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

console.log("");
console.log("-- Filtered Products (Price < $50) --");
const affordable = products.filter(function (product) {
  return product.price < 50;
});
console.log(affordable);

console.log("");
console.log("-- Mapped Product Tags (map) --");
const tags = products.map(function (product) {
  return `${product.name.toUpperCase()} costs $${product.price}`;
});
console.log(tags);
