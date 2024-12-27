function nice(name) {
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are good")
}

nice("harsh")

nice("naresh")


// console.log("Hey Harry you are good")
// console.log("Hey Harry you are nice")
// console.log("Hey Harry your tshirt is good")


function sum(a,b,c=5) {
    // console.log(a+b)
return a+b+c
}

result1 = sum(2,3)
result2 = sum(2,5)
result3 = sum(4,9,2)

console.log("The sum of these numbers:",result1)
console.log("The sum of these numbers:",result2)
console.log("The sum of these numbers:",result3)

const func1 =(a)=>{
    console.log("This is a arrow function",a)
}

func1(34);
func1(56);