let arr = [
  [2, 4, -1],
  [10, 5, 11],
  [18, -7, 6],
];
let arr2 = [
  [2, 4, -1],
  [10, 5, 11],
  [18, -7, 6],
];

function convertToTransposeMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i != j) {
        temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }
  }
  return console.log(arr);
}

convertToTransposeMatrix(arr);
