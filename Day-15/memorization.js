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

// Example usage
function slowFunction(x) {
    // Simulate a slow computation
    for (let i = 0; i < 1e7; i++) {}
    return x * 2;
}

// Create a memoized version of `slowFunction`
const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computes and logs result
console.log(memoizedSlowFunction(5)); // Fetches result from cache
console.log(memoizedSlowFunction(10)); // Computes and logs result
console.log(memoizedSlowFunction(10)); // Fetches result from cache
