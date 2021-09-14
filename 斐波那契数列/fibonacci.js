// 斐波那契数列

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // f(n) = f(n-1) + f(n-2)
    // 0 1 1 2 3 5 8 13 21 34 55
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = (a + b) % (1e9 + 7);
        a = b;
        b = c;
    }
    return b;
};

console.log(fib(2), 1)
console.log(fib(7), 13)
console.log(fib(10), 55)
console.log(fib(45), 134903163)
console.log(fib(81), 107920472)