

function greet() {

    let hello = 'Bonjour';

    return {
        namaste() {
            console.log(hello);
        }

    }
}


const obj = greet();

obj.namaste();



function createCounter(){
    let counter = 0

    return{
        increment(){
            counter++;
            console.log(`counter: ${counter}`);
        },

        getCounter(){
            return counter;

        }
    };
}


const myCounter = createCounter();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCounter());

function createUniqueIdGenerator() {
    let lastId = 0; // Private variable to keep track of the last generated ID

    return function() {
        lastId++;
        return lastId;
    };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId()); // 1
console.log(generateUniqueId()); // 2
console.log(generateUniqueId()); // 3
console.log(generateUniqueId()); // 4


