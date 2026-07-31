// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 5, 4, 4, 4, 4, 5, 7, 8, 9];
let prevElem = null;
for (let i = 0; i < arr.length; i++) {
    if(prevElem / 2 != arr[i]){
        arr[i] *= 2; // prev and abhi ka is not same so double
        prevElem = arr[i] / 2;
    }
}

// or 
// arr.map((num, i) => { num === arr[i - 1] ? num : num * 2});

console.log(arr);