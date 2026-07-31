/* 
5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/
function findSum(arr){
    let sum = 0;
    for(const elem of arr){
        if(elem < 0){
            return sum;
        }
        sum += elem;
    }
    return sum;
}

console.log(findSum([1, 2, 3, 4, 5]));
console.log(findSum([1, 2, 3, 4, -5]));
console.log(findSum([1, 2, -3, 4, 5]));