arr = [23,45,67,12,14,35,78,90,23,45,67,8,2,3,4,5];


let res = ''
for (let i of arr){
    res += i+' ';
}
console.log(res.trim())


arr.forEach(element => {
    console.log(element)
});


//Multi Dimensional array

let _d2 = [[1,2,3],[3,4,5],[5,6,7],[7,8,9],[9,0,1]]
console.log(_d2)

for (let i of _d2){
    for (let j of i){
        console.log(j)
    }
}