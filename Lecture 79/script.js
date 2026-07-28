let a = prompt("Enter the number1: ");
let b = prompt("Enter the number2: ");
if(isNaN(a) || isNaN(b)){
    throw new Error("bkl");
}

let sum = parseInt(a) + parseInt(b);
try{
    console.log("The sum is ", sum*x);
} catch(err){
    console.log(err);
}