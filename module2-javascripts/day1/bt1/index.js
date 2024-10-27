let a = true
let b = true
let c = false
console.log("a && b && c = ",a && b && c)  // false vi a && b la  true  con c la  false nhung phep toan chi dung neu ca 2 deu dung
console.log("a && b && !c = ",a && b && !c) // true vi giong nhu tren nhung ! la dau phu dinh  c = false nhung !c = true
console.log("(a && b)|| c = ",(a && b)|| c) // true  vi chi  can 1 trong 2  dk true "dk1 true"
console.log("(x && y) || !z = ",(x && y) || !z) // true vi ca  2 dk deu dung
console.log("x && (y || z) = ",x && (y || z)) //true vi dk1  la  true dk2 nhan true ==> true
console.log("x && !(y || z) = ",x && !(y || z)) // false giong  o tren nhunng  !dk2 ==> false
console.log("x && (y || !z) = ",x && (y || !z)) // true 
console.log("x && (!y || z) = ", x && (!y || z))// false