//nested if-else statement

let a = 24;
let b = 12;
let c = 67;

if (a>b){
    if(a>c){
        console.log(`${a} is gretatest number`);
    }else{
        console.log(`${c} is the greatest number`);
    }
}else {
    if(b>c){
        console.log(`${b} is greatest number`)
    }else{
        console.log(`${c} is greatest number`)
    }
}