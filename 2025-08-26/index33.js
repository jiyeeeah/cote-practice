function find(x, tree) {
  if (x === tree[x]) return x;
  find(tree[x], tree);
}

function union(x, y, tree) {
  const xRoot = find(x, tree);
  const yRoot = find(y, tree);
  tree[yRoot] = xRoot;
}

function solution(k, operations) {
  const tree = new Array(k).fill(0);

  for (const operation of operations) {
    const command = operation[0];
    if (command === "u") {
      union(operation[1], operation[2], tree);
    } else {
      find(operation[1], tree);
    }
  }

  return tree.filter((val, index) => val === index).length;
}

const result1 = solution(3, [
  ["u", 0, 1],
  ["u", 1, 2],
  ["f", 2],
]);
console.log(result1); // 1

const result2 = solution(4, [
  ["u", 0, 1],
  ["u", 2, 3],
  ["f", 0],
]);
console.log(result2); // 2
