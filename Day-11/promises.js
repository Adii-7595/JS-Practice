//Promises and async/await

let promise = new Promise((resolve,reject)=>{
    let name = 'aditya';
    if (name){
        resolve('all okay!');
    } else{
        reject('not name')
    }
});

// promise.then(result =>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log('Promise is settled')
// })

promise.then(result => {
    console.log(result)
    return new Promise((resolve,reject)=>{
        resolve('ye v ho gya!');
    });
}).then(aagewala => {
    console.log(aagewala);
})
.catch(error => {
    console.log(error);
})



let promise1 = Promise.resolve(23);
let promise2 = 23;
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'adi');
});

Promise.all([promise1,promise2,promise3]).then(values =>{
    console.log(values);
})


let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let a = false;

        if (a) resolve('value checked')
        else reject ('value is invalid')
    },2000)
     
}).then(value => {
    console.log(value);
}).catch(error=>{
    console.log(error);
})

function serverData(time,data){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, time);
    });
}

serverData(1000, 'data-1').then(res1 =>{
    console.log(res1);
    return serverData(1000,'Data-2');
}).then(res2 =>{
    console.log(res3);
    return serverData(1000,'Data-3');
}).then(res3 =>{
    console.log(res3);
    return serverData(1000,'Data-4');
}).then(res4 =>{
    console.log(res4);
    return serverData(1000,'Data-5');
}).then(res5 =>{
    console.log(res5);
    return serverData(1000,'Data-6');
}).then(res6 =>{
    console.log(res6);
    return serverData(1000,'Data-7');
}).then(res7 =>{
    console.log(res7);
    return serverData(1000,'Data-8');
}).then(res8 =>{
    console.log(res8);
    return serverData(1000,'Data-9');
}).then(res9 =>{
    console.log(res9);
    return serverData(1000,'Data-10');
}).then(res10 =>{
    console.log(res10);
    return serverData(1000,'Data-11');
}).then(res11 =>{
    console.log(res11);
    
}).catch(error => {
    console.error('Error',error)
});


