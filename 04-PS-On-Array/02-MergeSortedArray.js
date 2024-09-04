const num1 = [1, 2, 3, 4, 5];
const num2 = [0, 2, 3, 8, 9, 10, 13, 14, 85];

function mergeArray(arr1, arr2) {
  let result = [];
  // we also create Array like that
  // let result = Array(m+n).fill(0)
  const m = arr1.length; // 1st array length
  const n = arr2.length; // 2nd array length
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2
  let k = 0; // pointer for result
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }
  // the above while loop stops when any one array exhausted
  while (m > n && result.length < m+n) {
    result[k] = arr1[i];
    i++;
    k++;
  }
  while (n > m && result.length < m+n) {
    result[k] = arr2[j];
    j++;
    k++;
  }
  return result;
}

console.log(mergeArray(num1, num2));
