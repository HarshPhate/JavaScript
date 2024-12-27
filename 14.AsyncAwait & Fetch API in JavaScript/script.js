console.log("Harsh")

// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })

// }

async function getData() {
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text() 
    
    return data
}

async function main(){

console.log("loading Modules")

console.log("DO something else")

console.log("Load data")

let data = await getData()

console.log(data)
console.log("Process data")
console.log("Task 2")


}

main()

// data.then((v) => {
//     console.log("Data")
//     console.log("Process data")
//     console.log("Task 2")
// })