function memoize(fn) {
    const cache = new Map(); // Private cache to store previous results

    return function(...args) {
        // Create a key from the arguments
        const key = JSON.stringify(args);

        // Check if the result is already in the cache
        if (cache.has(key)) {
            console.log('Fetching from cache:', key);
            return cache.get(key);
        }

        // Compute the result and store it in the cache
        const result = fn(...args);
        cache.set(key, result);
        console.log('Computing result for:', key);
        return result;
    };
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Testing the memoized factorial function
console.log(memoizedFactorial(5));  // Computes and logs result
console.log(memoizedFactorial(5));  // Fetches result from cache
console.log(memoizedFactorial(10)); // Computes and logs result
console.log(memoizedFactorial(10)); // Fetches result from cache
console.log(memoizedFactorial(6));  // Computes and logs result
