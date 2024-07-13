
//variable and it's data types.

//ES5 (ECMAScript 5) and ES6 (ECMAScript 2015) are versions of the ECMAScript standard, which JavaScript is based on. ES6 introduced several new features and syntax improvements over ES5. One of the notable changes in ES6 is the introduction of `let` and `const` for variable declaration, alongside the traditional `var` from ES5.

// ### Differences between ES5 and ES6

// #### ES5
// - Introduced in 2009.
// - Uses `var` for variable declarations.
// - Functions and objects remain largely unchanged from earlier versions.
// - No built-in support for classes.
// - No block-scoped variables.
// - Functions and objects are the primary tools for creating modular and reusable code.

// #### ES6
// - Introduced in 2015.
// - Adds `let` and `const` for variable declarations.
// - Introduces classes and modules.
// - Arrow functions provide a more concise syntax and lexical `this` binding.
// - Template literals for easier string interpolation.
// - Destructuring assignment for arrays and objects.
// - Default parameters and rest/spread operators.
// - Promises for asynchronous programming.
// - Enhanced object literals and method definitions.

// ### `var`, `let`, and `const`

// #### `var`
// - Function-scoped: `var` declarations are scoped to the nearest function block.
// - Can be redeclared and updated.
// - Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.

// ```javascript
// function example() {
//   console.log(x); // undefined (due to hoisting)
//   var x = 10;
//   console.log(x); // 10
// }
// ```

// #### `let`
// - Block-scoped: `let` declarations are scoped to the nearest enclosing block.
// - Cannot be redeclared in the same scope but can be updated.
// - Variables declared with `let` are hoisted to the top of their block but not initialized, leading to a "temporal dead zone" until the declaration is encountered.

// ```javascript
// function example() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 10;
//   console.log(x); // 10
// }
// ```

// #### `const`
// - Block-scoped: `const` declarations are also scoped to the nearest enclosing block.
// - Cannot be redeclared or updated.
// - The value it holds cannot be changed through reassignment, but if it is an object or array, its properties or elements can be modified.

// ```javascript
// function example() {
//   const x = 10;
//   console.log(x); // 10

//   // x = 20; // TypeError: Assignment to constant variable.

//   const obj = { a: 1 };
//   obj.a = 2; // This is allowed
//   console.log(obj.a); // 2
// }
// ```

// ### Summary

// - **`var`**: Function-scoped, can be redeclared and updated, hoisted and initialized with `undefined`.
// - **`let`**: Block-scoped, cannot be redeclared in the same scope but can be updated, hoisted but not initialized.
// - **`const`**: Block-scoped, cannot be redeclared or updated, hoisted but not initialized, allows mutation of objects and arrays.

// ES6 introduced many other features and improvements, making JavaScript more powerful and easier to use.


var adi = 23
console.log(adi);

let title = "Aditya"
console.log(title);


const value = 29
console.log(value);


let type = 12345;
console.log(typeof(type))
type = "adi";
console.log(typeof(type))
type = true;
console.log(typeof(type))
type = "123";
console.log(typeof(type))
type = "123" + 1;
console.log(type)
console.log(typeof(type))
type = null;
console.log(typeof(type))
type = undefined;
console.log(typeof(type))
type = Symbol("$");
console.log(typeof(type))
type = "$";
console.log(typeof(type))



const a = 123
console.log(a)

// a= 9                    typeError: assignment to constant variable
// console.log(a)


// differentiate between var , let and const

function adityaaa(){
    if(true) {
        var x = 23;
        console.log(x)
    }
    console.log(x)     // it will print 23 as var is function scoped not block scope
}
adityaaa()
function adityaa(){
    if(true) {
        let x = 23;
        console.log(x)
    }
    console.log(x)        //ReferenceError: x is not defined    it will not print 23 as let is not function scoped but block scope
}
adityaa()
function aditya(){
    if(true) {
        const x = 23;
        console.log(x)
    }
    console.log(x)        // ReferenceError: x is not defined    it will print 23 as const is function scoped not block scope
}

aditya()