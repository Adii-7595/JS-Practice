
function tryCatch() {

    try {

        // if (a == 3) {
        //     console.log('Equal')
        // }

        throw new Error('intentional error is showing to you!')

    } catch (error) {
        console.error('error: ', error.message);
    }
}
tryCatch();


function division(a, b) {
    try {
        if (b == 0) {
            throw new Error('division by zero is lead to undefined value.')
        }
        console.log('result of division is: ', a / b);
    } catch (error) {
        console.error('error caught:', error.message)
        // console.error('error caught:', error)
    } finally {
        console.log('finally the execution is over')
    }
}

division(2, 0);


class CustomError extends Error {
    constructor(message, erroCode) {
        super(message)
        // this.name = this.constructor.name;
        this.erroCode = erroCode
    }
}

function throwError() {
    try {
        throw new CustomError('this is a custom error', 502);
    } catch (error) {
        console.error(`caught a custom error ${error.message} and code: ${error.erroCode}`)
    } finally {
        console.log('it runs in any case');
    }
}


throwError()


function stringNotEmpty(s) {
    try {
        if (!s.length) {
            throw new CustomError('string is empty', 'bad status');
        }
    }
    catch(error){
            console.error('caught error', error.message, error.erroCode);
}
}

stringNotEmpty('')





let promise = new Promise((resolve,reject)=>{
    
    let value = 21;

    if(value == 23){
        resolve('Its correct value')
    }else{
        reject('it is a wrong value')
    }
}).then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})


let prm = new Promise((resolve, reject) => {
    const randomValue = Math.random() * 10;

    if (randomValue > 5){
        resolve('value is greater than 5')
    }else{
        reject('error!, value must be greater than 5')
    }
})


async function mixed(){
    try{
    const val = await prm;
    console.log(val);
}catch(error){
    console.error(error);
}
}

mixed()



// Attempt to fetch from an invalid URL
fetch('https://invalid-url.example')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok', response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  (async () => {
    try {
        const response = await fetch('https://invalid-url.example');
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Problem with fetching API:', error);
    }
})();
