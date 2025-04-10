const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();
const array = input.map((arr) => arr.split(" ").map(Number));

const solution = (T, input) => {
  const result = [];
  for (let i = 0; i < T; i++) {
    const sortedArr = input[i].sort((a, b) => b - a);
    result.push(sortedArr[2]);
  }
  return result.join("\n");
};

const result = solution(T, array);
console.log(result);
