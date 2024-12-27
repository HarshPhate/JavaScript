console.log("Harsh is a hacker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am inside a settimeout")
}, 1000);
setTimeout(() => {
    console.log("I am inside a settimeout")
}, 0);

console.log("the end")

const fn = () => {
  console.log("Nothing")
}


const callback = (arg,fn) => {
    console.log(arg)
    fn()
}

const loadscript =(src,callback) => {
   let sc = document.createElement("script")
   sc.src = src;
   sc.onload =callback("Harsh",fn)
document.head.append("sc")
  
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)