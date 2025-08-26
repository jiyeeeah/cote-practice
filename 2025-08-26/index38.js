function solution(graph, start) {
  const adj = {};
  for (const [start, end] of graph) {
    if (!adj[start]) {
      adj[start] = [];
    }
    adj[start].push(end);
  }

  const answer = [];
  const visited = new Set();
  function DFS(node) {
    if (visited.has(node)) return;
    answer.push(node);
    visited.add(node);

    if (!adj[node]) return;
    for (const next of adj[node]) {
      DFS(next);
    }
  }

  DFS(start);
  return answer;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);

console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);
