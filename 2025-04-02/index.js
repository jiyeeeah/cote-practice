const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const t = input[0];

for (let i = 1; i <= t; i++) {
  const binary = input[i].toString(2);
  const binaryArr = [...binary].reverse();

  let idx = [];
  for (let j = 0; j < binaryArr.length; j++) {
    if (binaryArr[j] === "1") {
      idx.push(j);
    }
  }
  console.log(idx.join(" "));
}
