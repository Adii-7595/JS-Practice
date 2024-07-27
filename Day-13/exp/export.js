// module.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}


function division(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

const PI = 3.14;
const e = 2.7;


module.exports = { PI, e, add,sub,mul,division};







