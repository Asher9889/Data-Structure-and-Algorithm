let nums = [6, 5, 8, 7, 0, 10];

function BubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // total n - 1 operations krenge honge last one apne aap sort ho jayega
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(BubbleSort(nums));
