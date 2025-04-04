const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const solution = (input) => {
  let maxPassengers = 0;
  let currentPassengers = 0;
  for (let i = 0; i < input.length; i++) {
    currentPassengers = currentPassengers - input[i][0] + input[i][1];
    if (currentPassengers > maxPassengers) {
      maxPassengers = currentPassengers;
    }
  }
  return maxPassengers;
};

const result = solution(input);
console.log(result);
