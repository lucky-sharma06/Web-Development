/*
8. Async Array Mapping:
   Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
*/

async function delayDouble(elem){
    return new Promise((resolve) => {
        setTimeout(() => {
            elem = elem * 2;
            resolve(elem);
        }, 500);
    });
}

let A = [1, 2, 3, 4, 5];
(async () => {
    for(let index in A){
        let p = await delayDouble(A[index]);
        A[index] = p;
        console.log(A);
    }
})();