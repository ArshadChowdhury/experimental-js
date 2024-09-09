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

function SeriesSum(n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += 1 / (i * 3 + 1);
  }

  return result.toFixed(2);
}

console.log(SeriesSum(5));
