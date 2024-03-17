console.log(`Jai sai master`);
console.log(`Jai Bapuji maharaj`);

/* 
(1)Creat a function that take two numbers as arguments and returns their sum.

let sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(5, 3));
-------------------------------------------------------------------------------------------------------------------------*/
/* (2) Write a function that takes an integer minutes and converts it to seconds. 

let minuteToSeconds = (minutes) => {
  const Seconds = minutes * 60;
  return Seconds + " " + "seconds";
};

console.log(minuteToSeconds(5)); 
-------------------------------------------------------------------------------------------------------------------------*/
/*(3) Create a function that takes a number as an argument, increments the number by +1 and returns the result.

let incrementNumber = (IncrementbyOne) => {
  return IncrementbyOne + 1;
};
console.log(incrementNumber(5)); 
------------------------------------------------------------------------------------------------------------------------*/
/* (4)Create a function that takes the age in years and returns the age in days. 

let ageinYearsTodays = (age) => {
  const days = age * 365;
  return days;
};

console.log(ageinYearsTodays(24)); */
/* (5) Create a function that takes voltage and current and returns the calculated power. 

let powerByVoltageandCurrent = (voltage, current) => {
  const power = voltage * current;
 , return power;
};
console.log(powerByVoltageandCurrent(55, 12)); 
-------------------------------------------------------------------------------------------------------------------------*/
/* 
   (6).Write a function that returns the string "something" joined with a space " " and the given argument a.  

let bhanu = (Str, a) => {
  returnedString = Str + " " + a;
  return returnedString;
};

console.log(bhanu("SriRam", "SriKrishn")); */

/* 
(7)Create a function that takes two arguments. Both arguments are integers, a and b. 
Return true if one of them is 10 or if their sum is 10. 

let trueOrFalse = (a, b) => {
  op = a === 10 || b == 10 || a + b == 10;
  return op;
};

console.log(trueOrFalse(10, 0)); 
------------------------------------------------------------------------------------------------------------------------------*/
/*  (8) Create a function that takes two strings as arguments and
  returns either true or false depending on whether the total number of characters in the first string is equal
   to the total number of characters in the second string. 
,
let str = (str1, str2) => {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
};

console.log(str("ram", "lal"));
------------------------------------------------------------------------------------------------------------------------------*/
/* (9) Create a function that takes a name and returns a greeting in the form of a string.
 Don't use a normal function, use an arrow function. 

var greetingUser = (greet) => {
  return `Jai Shri Ram ${greet} welcome `;
};

console.log(greetingUser("Bhanuprakash")); 
------------------------------------------------------------------------------------------------------------------------------*/
/* (10)Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).    
let strNum = "(";
let NumberFunction = (numberArray) => {
  for (i = 0; i < numberArray.length; i++) {
    // console.log(numberArray[i]);
    strNum += numberArray[i];
    // console.log(strNum);
    if (i === 2) {
      strNum += ")" + " ";
      // console.log(strNum);
    }
    if (i === 5) {
      strNum += "-";
    }
  }
};
NumberFunction([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
console.log(strNum);
let a = "" + 9;
console.log(a);
console.log(a + 9);
console.log(typeof a);

// WHEN WE ASSIGN 0  AND ADD IT GIVES SUM || WHEN WE ASSIGN EMPTYSTRING AND ADD IT GIVES STRING(concatination)   */

/* (11) Create a function that returns an array of strings sorted by length in ascending order.
Example:
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]  */

//  1. **Reverse and Capitalize**: Write a function that takes an array of strings, reverses each string, and
// capitalizes the first letter of each word in the reversed string

// let sa =;

// na = [];
// let b = (a) => {
//   for (i = 0; i < a.length; i++) {
//     for (j = a[i].length - 1; j >= 0; j--) {
//       // console.log(a[i][j]);
//     if( ){

//     }

//   }
// }
// };

// b(["orange", "banana", "kiwi"]);

// // console.log(na);
// let c = ["kiwi", "bannana", "mango"];

// console.log();

// const x = 100.656;
// console.log(x.toFixed(100));
// const z = Math.ceil(x);
// console.log(z);

// console.log(Math.random(5));
//      18/01/24
// debugger;
// let str = "ProBlEmAtic";
// let nwStr = "";
// let Con = "";
// // let count = 0;
// let vowels = "aeiouAEIOU";

// for (i = str.length - 1; i >= 0; i--) {
//   if (vowels.includes(str[i])) {
//     // console.log(str[i]);
//     nwStr += str[i];
//   } else {
//     // console.log(str[i]);
//     Con += str[i];
//     // count++;
//   }
// }
// console.log(nwStr);
// console.log(Con);

// a = 10;
// b = 5;
// console.log(a | b);

// console.log(a & b);

// console.log(document);

// let x = () => {
//   return {
//     y: "z",
//   };
// };

// console.log(typeof x().y);
/* SORTING AN ARRAY with  LOOPS  DESCENDING ORDER   ADN ASCENDING ORDER 
let arr = [55, 12, 26, 35, 9];

for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      // console.log(arr[i]);
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
} */

/* SORT METHOD()
// console.log(arr);
// var b = [55, 12, 26, 35, 9];

// console.log(b.sort());

// b.sort((a, b) => {
//   return a - b;
// });
// console.log(b);

// b.sort((a, b) => {
//   return b + a;
// });
// console.log(b);   */

// let word =
//   "Ram is a good boy , Ram has two brothers. There is nothing to say that Ram is not a bod boy";

// let Raja = word.replaceAll("Ram", "Raja");
// // console.log(word);
// console.log(Raja);

// let x = "hello world";
// let C = "";
// let S = "";
// let y = "";
// for (i = 0; i < x.length; i++) {
//   if (x[i] !== " ") {
//     y += x[i];
//   }
// if (i % 2 == 0) {
//   C += x[i].toUpperCase();
//   // console.log(x[i]);
//   // y += x[i];
// } else {
//   S += x[i].toLowerCase();
// }
// }
// console.log(S);
// console.log(y);

// for (i = 0; i < y.length; i++) {
//   if (i % 2 == 0) {
//     C += y[i].toUpperCase();
//     console.log(y[i]);
//     C += y[i];
//   } else {
//     S += y[i].toLowerCase();

//     S += y[i];
//   }
// }

// console.log(C);
// console.log(S);

/* let b = ["aa", "bab", "balu", "a"];


for (i = 0; i < b.length; i++) {
  for (j = i + 1; j < b.length; j++) {
    if (b[i] > b[j]) {
      var temp = b[i];
      b[i] = b[j];
      b[j] = temp;
    }
  }
}
console.log(b); */

// var a = [1, 2, 3, 4];
// console.log(a);
// console.log(a.length);
// a.length = 0;
// console.log(a);
