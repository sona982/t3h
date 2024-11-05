// // BAI1
// let alphabet = [
//     'a',
//     'b',
//     'c'
// ]

// let alphabet2 = [
//     'a',
//     'b',
//     'c'
// ]
// console.log(alphabet+alphabet2);
// // a,b,ca,b,c
// console.log(alphabet==alphabet2);
// // false

// // BAI2
// let element = [
//     1,
//     2,
//     3,
//     4
// ]
// console.log(element[0],element[3]);
// // 1 4
// console.log(element[1]+element[2]);
// // 5
// element.splice(1,1,4);
// element.splice(3,1,2);
// console.log(element);
// // [1, 4, 3, 2]

// // BAI3
// let math = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10
// ]
// let evenNumber = math.filter(even => even %2 ===0)
// //math.filter(...) là một phương thức trong JavaScript giúp lọc các phần tử của mảng dựa trên điều kiện nhất định
// console.log(evenNumber);
// // (5) [2, 4, 6, 8, 10]
// let sum = math.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // accumulator: Giá trị tích lũy qua mỗi lần lặp. Đây là giá trị mà reduce trả về cuối cùng.
// // currentValue: Giá trị của phần tử hiện tại trong mảng.
// // index: Chỉ số của phần tử hiện tại (không bắt buộc).
// // array: Mảng gốc mà reduce được gọi đến (không bắt buộc).
// // initialValue: Giá trị khởi đầu của accumulator. Nếu không truyền initialValue, accumulator sẽ lấy giá trị đầu tiên của mảng và bắt đầu từ phần tử thứ hai.
// // Bước 1: accumulator bắt đầu từ 0 (giá trị initialValue), và currentValue là 1 (phần tử đầu tiên). accumulator + currentValue = 0 + 1 = 1.
// // Bước 2: accumulator bắt đầu từ 1 (giá trị initialValue), và currentValue là 2 (phần tử thu hai). accumulator + currentValue = 1 + 2 = 3.
// // Bước 3: accumulator bắt đầu từ 3 (giá trị initialValue), và currentValue là 3 (phần tử thu ba). accumulator + currentValue = 3 + 3 = 6.
// // Bước 4: accumulator bắt đầu là 6 (giá trị initialValue), và currentValue là 4 (phần tử thu bài). accumulator + currentValue = 6 + 4 = 10.
// // ...
// console.log(sum);
// // 55

// let compare = math.reduce((a,b) => a<b ? a : b, math[0]);
// console.log(compare);

// BAI4
let returnN = false;
let array = [];
let n;
while (!returnN) {
        n = prompt("Nhập n: ");
        if(isNaN(n) || n <0) {
            alert("Vui lòng nhập số nguyên dương");
        } else {
            returnN = true;
            array.push(parseInt(n));
        }
    }
let continueN = true;
while(continueN){
    let number = propmt("Nhập n tiep tuc neu muon dung hay 'stop'");
    if(number.toLowerCase()=== 'stop'){
        continueN = false;
    }
    else if(isNaN(number)){
        array.push(parseInt(number));
    }
    else{
        alert("Vui lòng nhập số nguyên dương hoac stop");
    }
}
alert("Mang gom: [ "+array+" ]");
