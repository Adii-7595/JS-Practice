//Arrays

const arr = [1,2,3,4,5];
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length-1]);

arr.push(23);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift()
console.log(arr)
arr.unshift(27)
console.log(arr)


let newArr = arr.map(function(num){
    return num*num;
})
console.log(newArr);

let newArr2 = arr.map(num => num*num)
console.log(newArr2);

let filtter = arr.filter(num => num % 2 == 0)
console.log(filtter)

console.log(arr)
let reduce = arr.reduce(function(accumulator,value){
    return accumulator + value;
},0)
console.log(reduce)

let sum = arr.reduce((acc,n)=> acc+n,0)
console.log(sum)