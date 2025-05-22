const solution = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const remain = target - arr[i];
    const hasMatch = arr.find((value) => value === remain);
    if (hasMatch && hasMatch !== arr[i]) return true;
  }
  return false;
};

const result1 = solution([1, 2, 3, 4, 8], 6);
console.log(result1); // true

const result2 = solution([2, 3, 5, 9], 10);
console.log(result2); // false
