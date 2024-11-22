/**
 * here we basically find pivot and place it in its correct position by swaping hign and low elem
 *
 */

let arr = [12, 11, 15, 0, 25,-2,-5,0];

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (i < high && arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      // swaping
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap(pivot, arr[j]);
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
