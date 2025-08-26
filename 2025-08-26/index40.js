class MinHeap {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this._bubbleUp();
  }

  pop() {
    if (this.items.length === 0) return null;
    if (this.items.length === 1) return this.items.pop(); // 추가

    const min = this.items[0];
    this.items[0] = this.items.pop();
    this._bubbleDown();

    return min;
  }

  size() {
    return this.items.length;
  }

  _swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  _bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][0] <= this.items[index][0]) {
        break;
      }
      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  _bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() && this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[index][0] <= this.items[smallerChild][0]) {
        break;
      }

      this._swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  // 모든 노드의 거리 값을 무한대로 초기화
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }
  // 시작 노드의 거리 값은 0으로 초기화
  distances[start] = 0;

  // 우선순위 큐 생성
  const queue = new MinHeap();
  queue.push([distances[start], start]); // 시작 노드를 큐에 삽입

  // 시작 노드의 경로를 초기화
  const paths = { [start]: [start] };

  while (queue.size() > 0) {
    const [currentDistance, currentNode] = queue.pop();

    if (distances[currentNode] < currentDistance) {
      continue;
    }

    for (const adjacentNode in graph[currentNode]) {
      const weight = graph[currentNode][adjacentNode];
      const distance = currentDistance + weight;

      if (distance < distances[adjacentNode]) {
        distances[adjacentNode] = distance; // 최소 비용 업데이트
        // 최단 경로 업데이트
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];
        queue.push([distance, adjacentNode]); // 최소 경로가 갱신된 노드를 비용과 함께 큐에 푸시
      }
    }
  }

  // paths 배열을 노드 번호에 따라 오름차순 정렬하여 반환
  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach((node) => {
      sortedPaths[node] = paths[node];
    });

  return [distances, sortedPaths];
}

console.log(
  solution(
    {
      A: { B: 9, C: 3 },
      B: { A: 5 },
      C: { B: 1 },
    },
    "A"
  )
);
console.log(
  solution(
    {
      A: { B: 1 },
      B: { C: 5 },
      C: { D: 1 },
      D: {},
    },
    "A"
  )
);
