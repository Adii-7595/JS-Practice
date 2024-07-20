// template literals

const name = 'Aditya';
const age = 23;
console.log(`the person's name:${name} and age:${age}`)


let multi = `hey!, Everybody you all look very enrgetic today
which reminds me of my earlier days.`

console.log(multi)


//destructuting


let arr = [1,2,3,4,5,6,7,8,9]

const [f,s,t] = arr;
console.log(f)
console.log(s)
console.log(t)


let book = {
    names:'aditya',
    author:'maa',
    title:'son',
    birthplace:'sgg',
    bday:'23/04/2001',
}

const {names,author} = book
console.log(names)
console.log(author)


//spread and rest operators.

let arr1 = [...arr]

console.log(arr1)



function sum(...arr){
    return arr.reduce((summ,num)=> summ+num,0)
}
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log(sum());



const mul = (a,b=1)=>{
    return a*b;
}

console.log(mul(32,2));
console.log(mul(32));


//object with enhanced object literals

const mob = 1234567890;
const user = 'Aditya'

const company ={ 
    //shorthand property when variable and object key are same

    mob,
    user,


    hello(){
        return(`hello, I'm ${this.user} and my contact number is ${this.mob}`);
    },

    //computed property names

    ['lost'+'world'](){
        return('welcome to new world!');
    }
}

console.log(company)

console.log(company.mob)
console.log(company.user)
console.log(company.hello())
console.log(company.lostworld())