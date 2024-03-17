console.log("Jai Sai Master");
console.log("Jai Bapuji Maharaj");

// let s = "1";
// console.log(s.toUpperCase());
// console.log(s);

/* let b = "CoDers";
let conCat = "";
let conCat2 = "";
let conCatt = "";
let conCat22 = "";

for (i = 0; i < b.length; i++) {
  if (b[i] == b[i].toUpperCase()) {
    console.log(`${b[i]} is Captial letter`);
    // conCat += b[i] + " ";  give space between letter in horizontal
    conCat += b[i];
    conCatt += b[i] + " ";
  } else {
    console.log(`${b[i]} is Small letter`);
    conCat2 += b[i];
    conCat22 += b[i] + " ";
  }
}

console.log(`conctn of capital letters = ${conCat}`);
console.log(`conctn of capital letters with space = ${conCatt}`);

console.log(`conctn of small letters = ${conCat2}`);
console.log(`conctn of small letters with space = ${conCat22}`); */

/*  Printing the count of capital letters
let d = "CoDers";
let c = 0;
for (i = 0; i < d.length; i++) {
  if (d[i] == d[i].toUpperCase()) {
    c++;
  }
}

console.log(`Total capitala letters in the gvien string are ${c}`); */

// debugger;
/* let y = "CoDerS";
let sum = "";
let sumSpc = "";
for (var i = y.length - 1; i >= 0; i--) {
  if (y[i] == y[i].toUpperCase()) {
    console.log(y[i]);
    sum += y[i];
    sumSpc += y[i] + "       ";
  }
}
console.log(sum);
console.log(sumSpc); */

/* let gvn_str = "Helloworld1";
let strLnth = 0;
console.log(`The given string is = "${gvn_str}"`);
for (i = 0; i < gvnStr.length; i++) {
  if (gvn_str[i] == 1) {
    console.log(`'${gvn_str[i]}' is the number in given string`);
  } else {
    strLnth++;
  }
}

console.log(`Length of the given string is = ${strLnth}`); */

// var a = [1, 2, 3, 4];

// a.splice(1, 2, "100", "200");
// console.log(a);

// b = [1, 2, 3, 4];
// b.shift();
// b.shift();
// console.log(b);

// let h = "bhanu";
// console.log(h.charCodeAt(2));

// debugger;
// console.log("Start");

// // Asynchronous operation using setTimeout
// setTimeout(() => {
//   console.log("Async operation done after 2 seconds");
// }, 2000);

// console.log("End");

// let a = [1, 2, 3, 4];
// let b = [];
// for (i = 0; i < a.length; i++) {
//   // console.log(a[i] * 2);
//   b.push(a[i] * 2);
// }

// console.log(b);

// debugger;
// a = [1, 2, 3, 4];

// a.forEach(cb);

// var nn = [];

// function cb(values, index, arrays) {
//   nn.push(values * 3);
// }

// console.log(nn);

// let a = "hello";
// let b = "l";
// let nwStr = "";
// for (i = 0; i < a.length; i++) {
//   if (b.includes(a[i])) {
//     console.log(a[i]);
//     nwStr += a[i];
//   }
// }

// console.log(nwStr);

let a = "SacHin";
let b = "";

for (i = 0; i < a.length; i++) {
  if (a[i] == a[i].toUpperCase()) {
    b += a[i].toLowerCase();
    // console.log(a[i].toLowerCase);
  } else {
    b += a[i].toUpperCase();

    // console.log(a[i].toUpperCase);
  }
}
console.log(b);
