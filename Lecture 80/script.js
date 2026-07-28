let obj = {
    a: 1, 
    b: "Lucky"
}

console.log(obj);

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
// this sets rabit.[[Prototype]] = animal