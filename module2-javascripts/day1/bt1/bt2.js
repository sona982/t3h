// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// name = 'AAA', age = 20, isGood = true

// age + 10 = ?
// age % 3 = ?
// name + ' BBB' = ?
// !isGood = ?
// name == 'aaa' && age >= 20 → ?
// name != 'aaa' && isGood → ?
// !(age < 10) && !isGood → ?

let name  = 'AAA'
let age = 20
let isGood = true

console.log("age + 10 = ",age+10) // 30
console.log("age % 3 = ",age%3) // 2
console.log("name + ' BBB' = ", name + 'BBB') // AAA BBB
console.log("!isGood = ",!isGood) // false
console.log("name == 'aaa' && age >= 20 → ",name == 'aaa' && age >= 20) // false
console.log("name != 'aaa' && isGood → ",name != 'aaa' && isGood) // true
console.log("!(age < 10) && !isGood → ",!(age < 10) && !isGood) // false