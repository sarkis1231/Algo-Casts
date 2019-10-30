// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
function memoize(fn) {
    const cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        // console.log('sako: ', result)
        cache[args] = result;

        return result;

    }
}
// const fib = memoize(fib);




function fib(n) {
    const result = [0, 1];

    for (i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b)
    }
    return result[n];
}
fib = memoize(fib)

module.exports = fib;



// function fib(n) {
// if (n < 2) {
//     return n;
// }
// return fib(n - 1) + fib(n - 2);
// }


