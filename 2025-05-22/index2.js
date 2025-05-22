const hash = (string) => {
  const p = 31;
  const m = 1_000_000_007;
  let hashValue = 0;
  for (let i = 0; i < string.length; i++) {
    hashValue = (hashValue * p + string.charCodeAt(i)) % m;
  }
  return hashValue;
};

const solution = (stringList, queryList) => {
  const hashList = stringList.map((str) => hash(str));

  const answer = [];

  for (const query of queryList) {
    const queryHash = hash(query);
    if (hashList.includes(queryHash)) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
};

const result1 = solution(
  ["apple", "banana", "cherry"],
  ["banana", "kiwi", "melon", "apple"]
);
console.log(result1); // [true, false, false, true]
