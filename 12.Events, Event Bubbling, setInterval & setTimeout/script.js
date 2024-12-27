console.log("Harsh")

let button=document.getElementById("btn")

// button.addEventListener("click", ()=>{

//     alert("heloo brother motherfucer")
//     document.querySelector(".box").innerHTML =("hello brother mothewrfucker")
// })


button.addEventListener("dblclick", ()=>{

    alert("heloo brother motherfucer")
    document.querySelector(".box").innerHTML =("hello brother mothewrfucker")
})

button.addEventListener("contextmenu", ()=>{
   alert("hello brother dont hack us please")
})

document.addEventListener("keydown", (e)=>{
 console.log(e,e.key)
})

