console.log("This is the promise");
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)
        reject("Rejected the promise");
    else{
        setTimeout(() => {
            console.log("Code Executed");
            resolve("Resolved");

        }, 3000);
    }

});
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)
        reject("Rejected the promise2");
    else{
        setTimeout(() => {
            console.log("Code Executed2");
            resolve("Resolved2");

        }, 1000);
    }

});

let prom3 = Promise.all([prom1, prom2]);
prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});