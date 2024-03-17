console.log("Jai Sai Master");
console.log("Jai Bapuiji Maharaj");

// let sF = (arr, inp, n) => {
//   for (i = inp; i > 0; i--) {
//     n *= i;
//   }

//   for (j in arr) {
//     if (arr[j] === n) {
//       console.log(j);
//     }
//   }
// };

// sF([1, 24, 4, 120, 8, 121, 2, 6], 5, 1);
//----------------------------------------------------------------
// Without using Methods()
// let gle = (g, G) => {
//   for (i of g) {
//     //   console.log(i);
//     G += i + " ";
//   }
//   return G;
// };

// console.log(gle("Google", ""));

// let bh = "Google";
// J = "";
// for (i of bh) {
//   //   console.log(i);
//   J += i + "-";
// }

// console.log(J);
//------------------------------------------------------------
// With using Methods

// let Con = (bhh) => {
//   y = bhh.split("").join(" ");
//   return y;
// };

// console.log(Con("Google"));
// let Fun = (g) => {
//   x = g.split("").join("-");
//   return x;
// };

// console.log(Fun("Google"));

// debugger;
// let a = [81, 90, 3, 27, 8];

// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[j] < a[i]) {
//       // Swap values between a[i] and a[j]
//       let temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//       console.log(temp);
//       console.log(a[i]);
//     }
//   }
// }

// let b = ["aa", "bab", "balu", "a"];

// console.log(b.sort());

// console.log(a.sort());

a = [28, 1, 25, 25, 2, 1, 7, 3];
e = [];
// c1 = 0;
for (i of a) {
  if (!e.includes(i)) {
    e.push(i);
  }
}
console.log(e);
// e.sort((a, b) => {
//   return a - b;
// });
for (i = 0; i < e.length; i++) {
  c = 0;
  for (j = 0; j < a.length; j++) {
    if (e[i] == a[j]) {
      c = c + 1;
    }
  }
  if (c > 1) {
    console.log(e[i]);
    // c = c + 1;
  }
}
// if (c == 2) {
//   console.log(e[i]);
// }
