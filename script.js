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

// function bouncingBall(h, bounce, window) {
//   if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
//     let count = 1;
//     h = h * bounce;
//     while (h > window) {
//       count += 2;
//       h = h * bounce;
//     }
//     return count;
//   } else {
//     return -1;
//   }
// }

// console.log(bouncingBall(30, 0.66, 1.5));

// Build a pile of Cubes

// function findNb(m) {
//   // your code

//   let output = 1;
//   let check = 0;

//   while (check <= m) {
//     check += output ** 3;

//     if (check == m) {
//       return output;
//     }

//     output++;
//   }

//   return -1;
// }

// console.log(findNb(4183059834009));

// Count the divisors of a number

// function getDivisorsCnt(n) {
//   // todo
//   let count = 0;
//   let squareRootN = Math.sqrt(n);

//   if (n % squareRootN == 0) {
//     count++;
//   }
//   for (let i = 0; i < squareRootN; i++) {
//     if (n % i === 0) {
//       count += 2;
//     }
//   }
//   return count;
// }

// console.log(getDivisorsCnt(54));

// Find unique value from an array

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   let answer = arr[0] == arr[1] ? arr.pop() : arr[0];

//   return answer;
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]));

// Money money money problem

function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    // Calculate the interest for the year
    let yearlyInterest = principal * interest; // No need for / 100 because interest is already in decimal

    // Calculate the tax on the interest
    let interestAfterTax = yearlyInterest * (1 - tax); // No need for / 100 because tax is already in decimal

    // Add the after-tax interest to the principal
    principal += interestAfterTax;

    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
