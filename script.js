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

let n = 15;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
