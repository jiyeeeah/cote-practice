function solution(graph, start) {
  const adj = {};
  for (const [start, end] of graph) {
    if (!adj[start]) {
      adj[start] = [];
    }
    adj[start].push(end);
  }

  const answer = [];
  const queue = [];
  const visited = new Set();
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (!adj[currentNode]) continue;
    const adjNodes = adj[currentNode];

    for (let i = 0; i < adjNodes.length; i++) {
      const nextNode = adjNodes[i];
      if (!visited.has(nextNode)) {
        answer.push(currentNode);
        visited.add(currentNode);
        queue.push(nextNode);
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);
console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
);
