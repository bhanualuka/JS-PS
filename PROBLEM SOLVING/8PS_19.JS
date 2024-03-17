console.log("Jai Sai Master");
console.log("Jai Bapuji Maharaj");

// b = 0;
// let F = (a) => {
//   console.log((x = a.toString().split("")));
//   b = 0;
//   for (i = 0; i < a.length; i++) {
//     console.log(x[i]);
//   }
// };
// F(93);
//-------------------------------------------------------------------
/* Method "map()Number": */
let nS = ["5", "6"];
console.log(nS.map(Number));
// ----------------------------------------------------------------
let bhanu = (a) => {
  b = 0;
  c = 0;
  x = a.toString().split("").map(Number);
  // console.log(x);
  for (i = 0; i < x.length; i++) {
    // console.log(x[i]);
    b += x[i];
  }
  y = b.toString().split("").map(Number);
  // console.log(y);
  if (b >= 10) {
    for (i = 0; i < y.length; i++) {
      // console.log(y[i]);
      c += y[i];
    }
    return c;
  } else {
    return b;
  }
};

console.log(bhanu(93));
// console.log(c);

// let input1 = [3, 4, 120, 9];

// debugger;

let factorial = (f) => {
  n = 1;
  for (i = f; i > 0; i--) {
    n *= i;
    console.log(n);
  }
};
factorial(5);
