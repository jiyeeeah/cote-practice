const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const array = input[1].split(" ").map(Number);

const solution = (T, arr) => {
  let result = 0;
  for (let i = 0; i < T; i++) {
    if (isPrime(arr[i])) result++;
  }
  return result;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const result = solution(T, array);
console.log(result);
