console.log("Experiment");

// Star Patterns Problem

// function printStar(timesToPrint) {
//   let starString = "";
//   for (let i = 1; i <= timesToPrint; i++) {
//     for (let j = 0; j < i; j++) {
//       starString += "*";
//     }
//     starString += "\n";
//   }
//   return starString;
// }

// console.log(printStar(10));

// let n = 15;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Series Sum Problem

// function SeriesSum(n) {
//   if (n == 0) {
//     return "0.00";
//   } else {
//     n = n - 1;
//     let sumArray = [1];
//     while (n > 0) {
//       let x = 1 / (n * 3 + 1);
//       sumArray.push(x);
//       n = n - 1;
//     }
//     return sumArray.reduce((a, b) => a + b, 0).toFixed(2);
//   }
// }

// function SeriesSum(n) {
//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     result += 1 / (i * 3 + 1);
//   }

//   return result.toFixed(2);
// }

// console.log(SeriesSum(5));

// Finding nearest Square problem

// function nearestSq(n) {
//   let nearstLow = nearst_low(n);
//   let nearstHigh = nearst_high(n);

//   return n-nearstLow < nearstHigh-n ? nearstLow : nearstHigh;
// }

// function nearst_high(n) {
//   if (Math.sqrt(n)%1 === 0) {
//     return n;
//   }

//   return nearst_high(++n);
// }

// function nearst_low(n) {
//   if (Math.sqrt(n)%1 === 0) {
//     return n;
//   }

//   return nearst_low(--n);
// }

// Bouncing ball problem

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h = h * bounce;
    }
    return count;
  } else {
    return -1;
  }
}

console.log(bouncingBall(30, 0.66, 1.5));
