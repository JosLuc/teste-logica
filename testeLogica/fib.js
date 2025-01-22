function isFibonacci(num) {
    let fib = [0, 1];
    let nextFib = fib[fib.length - 1] + fib[fib.length - 2];

    while (nextFib <= num) {
        fib.push(nextFib);
        nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    }

    if (fib.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

let number = 21;
let number2 = 31;
console.log(isFibonacci(number));
console.log(isFibonacci(number2));
