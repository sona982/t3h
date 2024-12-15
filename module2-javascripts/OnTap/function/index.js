// function callFunction(title,author,pages) {
//     console.log(title);
//     console.log(author);
//     console.log(pages);
// };

// // callFunction("hi","nam",9);

// function log(message = "cc", number = 9) {
//     console.log(message)
//     console.log(number)
// }
// log();

// function average(math,physic,chemistry) {
//     let total = (math + physic + chemistry) /3;
//     console.log(total)
//     return total;
// }
// let con = average(9,10,5);
// console.log(con)


// function averageScore(math=0,physic=0,chemistry=0) {
//     result = (math + physic + chemistry) /3;
//     return result;
// }

// const math1 = 9;
// const physic1 = 10;
// const chemistry1 = 5;
// const result1 = averageScore(math1,physic1,chemistry1);
// console.log("average score student1:"+result1);

// const math2 = 4;
// const physic2 = 5;
// const chemistry2 = 6;
// const result2 = averageScore(math2,physic2,chemistry2);
// console.log("average score student2:"+result2);

// function multiply(a,b){
//     return a*b;
// }

// console.log(multiply(3,4));

// function double(a) {
//     return a*=a;
// }

// console.log(double(3));
// console.log(double(5));

function CtoF(c) {
    let result = c * (9/5) +32;
    return result;
}

console.log(CtoF(9))