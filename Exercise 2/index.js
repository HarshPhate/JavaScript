let rand = Math.random()

let first, second, third;

if (rand < 0.3) {
    first = "crazy";

}
else if (rand < 0.66 && rand >= 0.33) {
    first = " engine";
}

console.log(rand)
console.log(first)