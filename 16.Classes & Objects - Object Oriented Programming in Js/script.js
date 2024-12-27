// console.log("Harsh")

// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class animal{
    constructor(name){
        this.name=name         //this. keyword this is crate proerties in object

        console.log("Objectted is created..")
    }

    eat(){
        console.log("kha raha hoon")
    }

    jump(){
        console.log("kud raha hu")
    }
}


class lion extends animal{
    constructor(name){
        super(name)
        console.log("object is created and he is lion")
    }
}

let a =new animal("Bunny")

let l =new  lion("Harsh")

console.log(a)



