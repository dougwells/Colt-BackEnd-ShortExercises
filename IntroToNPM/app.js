var cat = require('cat-me');
var joke = require('knock-knock-jokes');
var faker = require('faker');
console.log ("==== My Electronic Shop of Silliness ====");

for(var i=0; i<11; i++){
var productName = faker.commerce.productName();
var price = faker.commerce.price();
console.log(productName + " - $" + price);

}