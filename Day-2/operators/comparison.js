//comparison operators


let a = 500;
let b = 499;

if (a>b){
    console.log("greater")
}else if(a<b){
    console.log("smaller")
}else{
    console.log("equals");
}

 a = 23;
 b = 56;

 if (a>=b){
    console.log("greater")
}else if(a<=b){
    console.log("smaller")
}else{
    console.log("equals");
}


// In JavaScript, == and === are both comparison operators, but they differ in how they compare the values. Here’s a detailed explanation of the differences:

// == (Equality Operator)
// Type Coercion: The == operator compares two values for equality after converting both values to a common type. This is known as type coercion.
// Usage: It’s used when you want to compare values without considering their types.
console.log(5 == '5'); // true
console.log(true == 1); // true
console.log(null == undefined); // true
console.log([] == false); // true


// No Type Coercion: The === operator compares both the value and the type of the two operands. No type conversion is performed.
// Usage: It’s used when you want to ensure that both the value and the type are the same.

console.log(5 === '5'); // false
console.log(true === 1); // false
console.log(null === undefined); // false
console.log([] === false); // false
