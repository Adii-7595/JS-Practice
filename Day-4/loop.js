for(let i = 1; i<=10; i++){
    console.log(i)
}

for (let j = 1; j<=10; j++){
    console.log(`5 * ${j} = `,5*j )
}

let k = 10;
let sum = 0;
while (k>0){
    sum += k
    k--
}
console.log(sum)

k=1
do{
    console.log(k);
    k++;
}while(k<=5)

k = 5
let mul = 1 

do{
    
    mul *= k
    k-- 
}while(k>0)
console.log(mul)

let result = '';
for(i = 0 ; i<5; i++){
    for(j=0; j <= i; j++){
        result += '*'+' '
    }
    console.log(result.trim())
    result = ''
}


result = ''
for (i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    result += i+' '
}console.log(result.trim())


result = ''
for (i=1;i<=10;i++){
    if(i==7){
        break;
    }
    result += i + ' '
}
console.log(result.trim())
