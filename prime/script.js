function isprime(n) {
    if (n <= 1) return 0; // 0 and 1 are not prime numbers
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

let n1, n2;

n1 = prompt("enter first number: ");
console.log(n1);

n2 = prompt("enter second number: ");
console.log(n2);

for (let i = n1; i <= n2; i++) {
    if (isprime(i)) {
        console.log(i);
    }
}