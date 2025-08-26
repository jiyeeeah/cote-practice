function find(x, tree) {
  if (x === tree[x]) return x;
  tree[x] = find(tree[x], tree); // 경로압축
  return tree[x];
}

function union(x, y, tree) {
  const xRoot = find(x, tree);
  const yRoot = find(y, tree);
  tree[yRoot] = xRoot;
}

function solution(k, operations) {
  // 각 노드가 자기 자신을 부모로 가지도록 초기화
  const tree = Array.from({ length: k }, (_, i) => i);

  for (const operation of operations) {
    const command = operation[0];
    if (command === "u") {
      union(operation[1], operation[2], tree);
    } else {
      find(operation[1], tree);
    }
  }

  return new Set(Array.from({ length: k }, (_, i) => find(i, tree))).size;
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
