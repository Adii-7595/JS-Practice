

function factorial(num){
    if(num === 1) {
        return 1
    }
    return num*factorial(num-1);
}

console.log(factorial(5))



function fibonacci(num){

    if (num < 0){
        return null
    }
    if(num==0){
        return 0
    }
    if(num === 1) return 1

    return fibonacci(num-1)+fibonacci(num-2);
}


console.log(fibonacci(10));



function sumOfArray(arr){
    if(arr.length===0){
        return 0
    }
    return arr[0]+sumOfArray(arr.slice(1));

}

console.log('SumOfArray')
console.log(sumOfArray([1, 2, 3, 4, 5])); 
console.log(sumOfArray([10, -1, 2, 5, 7]));



function maxOfArray(arr,ind = 0){
    if(arr.length===0){
        throw new error('Array is empty')
    }
    if(ind === arr.length-1){
        return arr[ind]
    }

    const maxOf = maxOfArray(arr,ind+1)

    return Math.max(arr[ind], maxOf);

}

console.log('max of array')
console.log(maxOfArray([1, 2, 3, 4, 5])); // Output: 5
console.log(maxOfArray([10, -1, 2, 5, 7])); // Output: 10




function reverseStringRecursive(str) {
    // Base case: if the string is empty
    if (str === '') {
        return str;
    }
    
    // Recursive case: reverse the substring and append the first character
    return reverseStringRecursive(str.substring(1)) + str[0];
}

// Example usage
console.log(reverseStringRecursive("hello")); // Output: "olleh"
console.log(reverseStringRecursive("world")); // Output: "dlrow"





function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Base cases
    if (str.length <= 1) {
        return true;
    }

    // Check if first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: check the substring without first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false



function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index exceeds the right index, the target is not found
    if (left > right) {
        return -1;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle
    if (arr[mid] === target) {
        return mid; // Target found, return its index
    }

    // If the target is less than the middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }

    // If the target is greater than the middle element, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, right);
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearchRecursive(sortedArray, 7));  // Output: 3
console.log(binarySearchRecursive(sortedArray, 20)); // Output: -1



function countOccurrences(arr, target, index = 0) {
    // Base case: If index is out of bounds, return 0
    if (index >= arr.length) {
        return 0;
    }

    // Check if the current element is the target
    const count = arr[index] === target ? 1 : 0;

    // Recursively count occurrences in the rest of the array
    return count + countOccurrences(arr, target, index + 1);
}

// Example usage
const array = [1, 2, 3, 4, 2, 5, 2];
console.log(countOccurrences(array, 2)); // Output: 3
console.log(countOccurrences(array, 5)); // Output: 1
console.log(countOccurrences(array, 10)); // Output: 0
