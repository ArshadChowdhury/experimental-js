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

// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;

//   while (principal < desired) {
//     // Calculate the interest for the year
//     let yearlyInterest = principal * interest; // No need for / 100 because interest is already in decimal

//     // Calculate the tax on the interest
//     let interestAfterTax = yearlyInterest * (1 - tax); // No need for / 100 because tax is already in decimal

//     // Add the after-tax interest to the principal
//     principal += interestAfterTax;

//     years++;
//   }

//   return years;
// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100));

// Formatting decimal places #0

// const twoDecimalPlaces = (n) => Number(n.toFixed(2));

// console.log(twoDecimalPlaces(4.659725356));

// Sorted? yes? no? how? problem

// function isSortedAndHow(array) {
//   // Create copies of the array and sort them
//   let ascending = [...array].sort((a, b) => a - b);
//   let descending = [...array].sort((a, b) => b - a);

//   // Compare the original array with the sorted arrays
//   if (array.every((val, index) => val === ascending[index])) {
//     return "yes, ascending";
//   } else if (array.every((val, index) => val === descending[index])) {
//     return "yes, descending";
//   } else {
//     return "no";
//   }
// }

// console.log(isSortedAndHow([15, 7, 3, -8]));

// Duck Duck Goose problem

// function duckDuckGoose(players, goose) {
//   let playerPosition = goose % players.length;

//   return playerPosition == 0
//     ? players[players.length - 1].name
//     : players[playerPosition - 1].name;
// }

// Sort array by string length

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length);
// }

// // Bumps in the Road

// const bump = (x) => {
//   x = x.split("n");
//   return x.length > 16 ? "Car Dead" : "Woohoo!";
// };

// console.log(bump("__nn_nnnn__n_n___n____nn__nnnnn"));

// Getting word from an array

// function reconstructText(array) {
//   let text = "";

//   for (let i = 0; i < array.length; i++) {
//     let position = array[i][0];
//     let char = array[i][1];

//     if (position > text.length) {
//       text += char;
//     } else {
//       text = text.slice(0, position + 1) + char + text.slice(position);
//     }
//   }

//   return text;
// }

// console.log(
//   reconstructText([
//     [1, "e"],
//     [1, "l"],
//     [2, "h"],
//   ])
// );

// Linkedin Example Meme

// you can read this code, you could |
// probably use a free cup of coffee.

var your_drink = "Cocktail";

var reverse = function (s) {
  return s.split("").reverse().join("");
};

var barista = {
  str1: "ion",
  str2: reverse("rcne"),
  std: "ypt",
  request: function (preference) {
    return preference + "Secret word:" + this.str2 + this.str3 + this.str1;
  },
};

console.log(barista.request(your_drink));
