let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// //////////////

// // Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(b, a, c, d))); // 2
console.log(Math.round(Math.min(a, b, c, d)));

// ////////////////////////////

// // Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.floor(d))); // 10000

// ////////////////////////
// // Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2

// /////////////////////
// // Use Variables b + d To Get This Valus
console.log(Math.trunc(b) / Math.ceil(d)); // 66.67 => String

console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(10 ** 5); // 100000
console.log(1e5); // 100000
console.log(100_000); // 100000
console.log(Math.floor(100000.4545)); // 100000
console.log(Math.ceil(99999.4545)); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 16

let myVar = "100.56789 Views";

console.log(Math.floor(parseFloat(myVar))); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

console.log(+Number.isInteger(100) + +Number.isInteger(100));

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

// /////////////

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
