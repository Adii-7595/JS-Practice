


let promise = new Promise((resolve,reject)=>{
    let success = true;

    setTimeout(()=>{
        if ( success) {
            resolve('task okay!')
        }else{
            reject('not okay!')
        }
    },2000);
}); 


async function task(){
    try{
        let result = await promise;
        console.log(result);
    }catch(error){
        console.log(error);
    }finally{
        console.log('promise is settled!')
    }
}

task()








let prom = new Promise((resolve,reject)=>{
    let success = false;

    setTimeout(()=>{
        if ( success) {
            resolve('task okay!')
        }else{
            reject('not okay!')
        }
    },2000);
}); 


async function taskhandler(){
    try{
        let result = await prom;
        console.log(result);
    } catch (error){
        console.log(error);
    }finally{
        console.log('promise is settled!')
    }
}

taskhandler()



// fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => response.json())
//     .then(data => console.log(data));



// async function apiData(){
//     let data = await fetch('https://api.thecatapi.com/v1/breeds')
//     console.log(data)
//     console.log('---------------------------------------------------------------------------------')
//     const value = await data.json()
//     console.log(value);
// }   
// apiData();


//concurrent promises

// let prom1 = new Promise((resolve,reject)=>{
//     if(true){
//         resolve('task is true');
//     }else{
//         reject('error');
//     }
// }).then(result=>{
//     console.log(result)
// })

let prom1 = Promise.resolve('adi');
let prom2 = 'gupta'
let prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Says! Hello Everyone')
    },3000)
})

let prom4 = new Promise((resolve,reject)=>{
    resolve('Say hii!')
});
async function hii(){
    let greeting = await prom4;
    console.log(greeting);
}

Promise.all([prom1,prom2,prom3,prom4]).then(value =>{
    console.log(value)
})

//promise.race



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('First resolved'),1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Second resolved'), 500);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Rejected promise'), 300);
});

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log(result); // 'Rejected promise'
    })
    .catch(error => {
        console.error('An error occurred:', error); // This line will be executed
    });


