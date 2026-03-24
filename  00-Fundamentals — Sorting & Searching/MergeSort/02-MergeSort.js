// Implementing merge sort
let nums = [2, 0, 1, 4, 3, 9, 7, 5, 0];

function mergeSort(arr, low, high) {
  if (low >= high) return;
  mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid); // it is left half array
  mergeSort(arr, mid + 1, high); // it is right half array
  merge(arr, low, mid, high);
}


function merge(arr, low, mid, high) {
  // i = [low...mid]
  // j = [mid+1...high]
  let left = low;
  let right = mid + 1;
  let result = [];

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
      result.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }
  while (right <= high) {
    result.push(arr[right]);
    right++;
  }
  
}

mergeSort(nums,0,8);
