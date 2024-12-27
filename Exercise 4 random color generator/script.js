console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.random;
    let val2 =131;
    let val3 =124;
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})