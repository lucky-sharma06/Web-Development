// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }
async function getData(){
    // Simulate getting data from a server
    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // console.log(x);
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
    return data; 
}
async function main(){
    console.log("code 1");
    console.log("code 2");
    console.log("code 3");
    let data = await getData();
    // data is a promise
    console.log(data);
}
main();

// let data = getData();
// data.then(() => {
//     console.log("code 4"); 
//     console.log("code 5");
//     console.log("code 6");
// }) 