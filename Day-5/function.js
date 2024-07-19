
//function declaration 

function evenOdd(num){
    if (num <= 0){
        console.log(`enter a number which is greater than zero` );
        return
    }else if(num%2==0){
        console.log(`${num} is even`);
        return
    }
    console.log(`${num} is odd`);
    return
}

evenOdd(0)

function square(val){
    return val*val
}

console.log(square(4))


//function expression

const maximum = function(a,b){
    if (a>b){
        console.log(`${a} is greater than ${b}`)

    }else{
        console.log(`${b} is greater than ${a}`)
    }

    return
}

maximum(45,78)


const concatenate = function(s1,s2){
    return s1+s2;
}

console.log(concatenate('Aditya ', 'Gupta'))


//Arrow function

const  sum = (a,b)=> a+b; //u can omit the cur;y braces and return keyword if function return value
console.log(sum(45,55))

const specificChar =  (str,ch) =>{
    for (const c of str){
        if (c === ch){
            return true;
        }
    }

    return false;
}

console.log(specificChar('Aditya','a'))



//function parameters and default values

function product(a,b=9){
    return a*b;
}
console.log(product(2));
console.log(product(2,4));


function greet(name,age=23){
    return `Namaste ${name}`;
}
console.log(greet('Aditya'))


//Higher order functions

function executeTimes(callback){
    callback()
}

function greeting(){
    console.log("Namaste!")
}

executeTimes(greeting)


//write a hod that takes a function and a nu,ber/ and calls the function
// that many times.

function repeater(caller,n){
    for (let i=0;i<n;i++){
        caller()
    }
}

function toberepeat(){
    console.log('Hello!, from Aditya')
}

repeater(toberepeat,10)

function higherOrder(func1,func2,value){
    const result1 = func1(value);
    const result2 = func2(result1);

    return result2

}

function square(x){
    return x*x;
}

function triple(x){
    return 3*x;
}

console.log(higherOrder(square,triple,5))



hello();
hello=()=>{
    console.log("namaste!")
}