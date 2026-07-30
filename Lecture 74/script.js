let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> You were clicked"
})

button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML = "Do left click";
})

document.addEventListener("keydown", (e) => {
    var x = e.key;
    document.querySelector(".box").innerHTML = x;
})