// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();





// function outer() {
//   let username = "Harsh"

//   function inner() {
//     let secret = "MY123";

//     console.log(username)            //inner function
//   }

//   function Twoinner() {
    
//     console.log(secret) 
//     console.log(username)            //Twoinner function
//   }
//   inner()
//   Twoinner()
// }
// outer()

// console.log(username)             //too outer function




// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


