const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const words = [...input];

const solution = (N, words) => {
  let result = 0;
  words.forEach((value) => {
    if (isGroupWord(value)) {
      result++;
    }
  });
  return result;
};

const isGroupWord = (word) => {
  const letters = word.split("");
  const visited = [];
  let current = "";
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    if (!visited.includes(currentLetter)) {
      visited.push(currentLetter);
      current = currentLetter;
    }
    if (current !== currentLetter && visited.includes(currentLetter)) {
      return false;
    }
  }
  return true;
};

const result = solution(N, words);
console.log(result);
