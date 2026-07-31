/*
10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
*/

const brewCoffe = async (orderName) => {
    let randomDelay = Math.floor(Math.random() * 10);
    randomDelay *= 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${orderName} is ready`);
        }, randomDelay);
    });
}

brewCoffe("Latte").then((res) => {
    console.log(res);
});