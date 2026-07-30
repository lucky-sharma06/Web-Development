function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.querySelectorAll(".box").forEach(e => {
    let col = randomColor();
    console.log(col);
    e.style.backgroundColor = col;
    e.style.color = randomColor();
})

