const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (input) => {
  const count = Number(input);
  const Fibonacci = [0, 1];
  for (let i = 2; i <= count; i++) {
    Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2];
  }
  return Fibonacci[count];
};

const result = solution(input);
console.log(result);
