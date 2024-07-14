//operators

let a = 10;
let b = 15;
console.log(a+b);
console.log(a-b);
console.log(b*a);
console.log((b/a));
console.log(b%a);

let num = 10;
let divisor = 3;

let floorResult = Math.floor(num / divisor);
let truncResult = Math.trunc(num / divisor);
let bitwiseOrResult = (num / divisor) | 0;
let parseIntResult = parseInt(num / divisor);
let doubleTildeResult = ~~(num / divisor);

console.log(floorResult); // 3
console.log(truncResult); // 3
console.log(bitwiseOrResult); // 3
console.log(parseIntResult); // 3
console.log(doubleTildeResult); // 3


a += b;
console.log(a)

a -= b;
console.log(a)



