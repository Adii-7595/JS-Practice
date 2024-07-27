import hello from './one.js';
import farewell from './two.js';

console.log(hello('Aditya'));
console.log(farewell('Aditya'));

const helloElement = document.createElement('p');
const farewellElement = document.createElement('p');

// Set the text content
helloElement.textContent = hello('Aditya');
farewellElement.textContent = farewell('Aditya');

// Append the elements to the body
document.body.appendChild(helloElement);
document.body.appendChild(farewellElement);