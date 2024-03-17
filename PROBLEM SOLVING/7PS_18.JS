console.log("Jai Sai Master ");
console.log("Jai Bapuji Maharaj");

//   18/01/24
/* let str = "ProBlEmAtic";
let nwStr = "";
let Con = "";
// let count = 0;
let vowels = "aeiouAEIOU";

for (i = str.length - 1; i >= 0; i--) {
  if (vowels.includes(str[i])) {
    // console.log(str[i]);
    nwStr += str[i];
  } else {
    // console.log(str[i]);
    Con += str[i];
    // count++;
  }
}
console.log(nwStr);
console.log(Con); */

/* 1) Write a program that takes array of numbers as input and
 print the sum of even numbers in the array. 

let arr1 = [5, 2, 1, 9, 7, 2];
let narr1 = 0;

for (i of arr1) {
  if (i % 2 == 0) {
    console.log(i);
    narr1 += i;
  }
}
console.log(narr1); */

// 2) Write a program that takes array of numbers as input and print the even numbers in the array in reverse order.
//  Even numbers should be printed in a single line.

// 	input: [44,8,3,1,7,2]
// 	output: 2844

/* let arr = [44, 8, 3, 1, 7, 2];
let arrn = "";
for (i of arr) {
  if (i % 2 == 0) {
    console.log(i);
    arrn += i;
    // arrn.push(i)
    x = arrn.split("").reverse().join("");
  }
}
console.log(x); */

/* 3) Write a program that takes array of numbers as input and
 print the odd numbers first, followed by even numbers in the array.

	input: [5,2,1,9,7,2]
	output: 519722 

let arr = [5, 2, 1, 9, 7, 2];
let oddar = [];
let evnar = [];

for (i of arr) {
  if (i % 2 !== 0) {
    // console.log(i)
    oddar.push(i);
  } else {
    evnar.push(i);
  }
}
let x = oddar.join("") + evnar.join("");
console.log(x); */

/*let str = "BHanuprakash";
// output-- HBanuprakash

let rst = [];
let sStr = [];

for (i of str) {
  if (i == i.toUpperCase()) {
    // console.log(i)
    rst.push(i);
  } else {
    sStr.push(i);
  }
}
let x = rst.reverse().join("") + sStr.join("");
// console.log(rst)
// console.log(sStr)
console.log(x); */

// let arr = [1, 46, 20, 1, 98];
// // output: 890264
// let arrn = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] % 2 == 0) {
//     // console.log(arr[i]);
//     console.log((arrn += String(arr[i]).split("").reverse().join("")));
//     // arrn += String(arr[i]).split("").reverse().join("");
//   }
// }
// console.log(arrn);
