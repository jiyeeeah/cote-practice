const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const solution = (N, K) => {
  const array = Array.from({ length: N }, (_, index) => index + 1);
  let currentPos = 0;
  while (array.length > 1) {
    const target = currentPos + K - 1;
    const targetIndex = target >= array.length ? target - array.length : target;
    array.splice([targetIndex], 1);
    currentPos = targetIndex;
  }
  return array[0];
};

const result = solution(N, K);
console.log(result);
