const arr = [10, 20, 30, 40, 50, 60, 70];

// reverse an array without creating new array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
 //   using two pointers in Array: i, j
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  return arr;
}

console.log(reverseArray([1,5,7,25,88,65,32,78,25,98,210]));
