/*
The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
*/

const placeOrder = async (orderName) => {
    let randomDelay = Math.floor(Math.random() * 10);
    randomDelay *= 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${orderName} is confirmed`);
        }, randomDelay);
    });
}

placeOrder("Appy Fizz").then((res) => {
    console.log(res);
});