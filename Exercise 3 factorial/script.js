console.log("Harsh")

let  a= 7

function factorial(Number){
    let arr =Array.from(Array(Number+1).keys())
    // console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b) =>{

  
    return a*b
        
  })
return c
}

console.log(factorial(a))

function k(Number){
    let k = 1;
    for (let index = 1; index <= Number; index++) {
      k = k*index
        
    }
    return k
}
console.log(k(a))
