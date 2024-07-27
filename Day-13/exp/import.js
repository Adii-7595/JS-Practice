
const math = require('./export.js')


const value = math.add(5,8)
const value2 = math.sub(5,8)
const value3 = math.mul(5,8)
console.log(value)
console.log(value2)
console.log(value3)
console.log(math.division(6,3))


console.log(math.PI)
console.log(math.e)


const adi = require('lodash');


const arr = [1,1,1,2,2,2,23,4,5,6,7,8]
const chunked = adi.chunk(arr,3)
console.log(chunked);


const object1 = { a: 1, b: { c: 3 } };
const object2 = { b: { d: 4 } };
const merged = adi.merge(object1, object2);
console.log(merged); // { a: 1, b: { c: 3, d: 4 } }


const axios = require('axios');


axios.get('https://jsonplaceholder.typicode.com/posts/1')

.then(response =>{
    console.log(response.data);
})
.catch(error => {
    console.log(error);
});


axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});


axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});


axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


  axios.get('https://jsonplaceholder.typicode.com/posts/1', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});




axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Use lodash to group posts by userId
    const grouped = adi.groupBy(response.data, 'userId');
    console.log(grouped);
  })
  .catch(error => {
    console.error(error);
  });
