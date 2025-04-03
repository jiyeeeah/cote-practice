const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const solution = (numbers) => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return [min, max].join(" ");
};

const result = solution(numbers);
console.log(result);
