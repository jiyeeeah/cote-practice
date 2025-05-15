const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const solution = (N, K) => {
  const array = Array.from({ length: N }, (_, index) => index + 1);
  while (array.length > 1) {
    for (let i = 0; i < K - 1; i++) {
      const current = array.shift();
      array.push(current);
    }
    array.shift();
  }
  return array[0];
};

const result = solution(N, K);
console.log(result);
