// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let names = ["bhavya", "arjun", "bheem", "nakula", "dhrithrashtra", "gangaputra", "bhishmapitamah", "shikhandini", "draupadi"];
let house = [];
names.forEach((name) => { // or we can use forof loop
    if(name.length < 6){
        house.push("Gryffindor");
    }
    else if(name.length < 8){
        house.push("Hufflepuff");
    }
    else if(name.length < 12){
        house.push("Ravenclaw");
    }
    else{
        house.push("Slytherin");
    }
});

console.log(names);
console.log(house);


