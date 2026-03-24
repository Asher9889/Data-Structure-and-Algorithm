let nums = [23, 8, 45, 85, 64, 23, 94, 2];

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let lowest_elem = i;
    for(let j = i; j < arr.length; j++){
      if(arr[j] < arr[lowest_elem]){
        lowest_elem = j;
      }
    }
    if(lowest_elem != i){
      swap(arr,i,lowest_elem);
    }
  }
  
  return arr;
}

console.log(selectionSort(nums));
