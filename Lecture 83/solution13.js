/*
13. The Shopping Cart Totalizer:
    You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
*/

function calculateTotal(Products) {
    let total = 0;
    Products.forEach((p) => {
        total += p.price * p.quantities;
    });
    return total;
}
dove = {
    name: "Dove",
    price: 1000,
    quantities: 1,
}
lux = {
    name: "Lux",
    price: 2000,
    quantities: 2,
}
nivea = {
    name: "Nivea",
    price: 3000,
    quantities: 9,
}
vaseline = {
    name: "Vaseline",
    price: 4000,
    quantities: 10,
}
let Products = [dove, lux, nivea, vaseline];

console.log(calculateTotal(Products));