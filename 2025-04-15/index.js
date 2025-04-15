const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const start = Number(input[0]);
const end = Number(input[1]);

const solution = (start, end) => {
  const arr = [0];
  let cnt = 0;
  let num = 1;
  for (let i = 0; i < end; i++) {
    arr.push(num);
    cnt++;
    if (cnt === num) {
      num++;
      cnt = 0;
    }
  }
  const result = arr.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0);
  return result;
};

const result = solution(start, end);
console.log(result);
