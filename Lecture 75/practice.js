let prom1 = new Promise((resolve, reject) => { 
    let a = Math.floor(Math.random() * 11); // 0 - 10 no. will generate
    if(a > 5){
        console.log(a);
        reject("prom1 is rejected a > 5");
    }
    else{
        setTimeout(() => {
            console.log(a, "3 second ho gye")
            resolve("prom1 is resolved a <= 5");
        }, 3000);
    }
 });
let prom2 = new Promise((resolve, reject) => { 
    let a = Math.floor(Math.random() * 11); // 0 - 10 no. will generate
    if(a > 5){
        console.log(a);
        reject("prom1 is rejected a > 5");
    }
    else{
        setTimeout(() => {
            console.log(a, "3 second ho gye")
            resolve("prom1 is resolved a <= 5");
        }, 3000);
    }
 });

 prom1  
    .then((res) => {
        console.log("The promise is resolved: : :")
    })
    .catch(err => {
        console.log("Aww error came: ");
    })
    .finally(() => {
        console.log("I will run always: ");
    });

console.log("JS OP");

console.log(Promise.any([prom1, prom2]));