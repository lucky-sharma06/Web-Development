async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(445)
        }, 3000)
    })
}

// let a = await sleep(); 
// let b = await sleep();
// this will give error coz await should be in async function

(async function(){ // or async function name() any is correct
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b); // it is private scope;
})();
// a, b are not accessible outside 

var [x, y] = [1, 5, 7];
console.log(x, y);

var [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(x, y, rest);

var arr = [1, 2, 3];
console.log(...arr);

let obj = {
    a: 1,
    b: 2, 
    c: 3,
}
let {a, b, ...rest2} = obj;
console.log(x, y, rest2);

// ... is rest as well as spread depending on the use case
