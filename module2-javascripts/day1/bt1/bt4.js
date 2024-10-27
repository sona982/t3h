let x = true
let y = false
let z = 10

console.log(x && y)              // false
console.log(x && !y)             // true
console.log(x && z == 10)       // true
console.log((x && z == 10))      // true
console.log(!(x && z == 10))  // false
console.log(!(x && z == 50))     // true
console.log(x && y && z == 10)  // false
console.log(x && !y && z == 10)  // true
console.log(x || y || z == 10)  // true
console.log((x && y) || z != 10) // false
console.log(!(x && z == 10) || y) // false
