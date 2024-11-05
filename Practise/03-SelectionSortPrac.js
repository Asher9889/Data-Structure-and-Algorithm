let nums = [1, 5, -6,-50,0,36, 45, 3, 7, 6, 2, 0, 46];

function smallestElemIndex(j, arr) {
  let to_be_Smallest_index = j;
  for (let i = j; i < arr.length; i++) {
    if (arr[i] < arr[to_be_Smallest_index]) {
      to_be_Smallest_index = i;
    }
  }
    return to_be_Smallest_index;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest_elem_index = i;
    let to_be_Smallest_index = smallestElemIndex(i , arr);
    if(smallest_elem_index !== to_be_Smallest_index){
        let temp = arr[smallest_elem_index];
        arr[smallest_elem_index] = arr[to_be_Smallest_index];
        arr[to_be_Smallest_index] = temp;
    }
  }
  return arr;
}


// const unsortedArray = [
//   750, 484, 239, 417, 735, 800, 633, 558, 407, 613, 389, 732,
//   473, 998, 874, 367, 907, 440, 500, 268, 615, 840, 741,  26,
//   210, 486,  12, 229, 887, 908, 559,  71,  83, 511,  57, 244,
//   675, 550, 859, 853, 441, 930, 188, 990, 617, 385,  62,  46,
//   381, 441, 694, 421, 722, 409, 476, 990, 798,  46, 794, 298,
//   936, 787, 744, 766, 198, 523, 375, 424,   3, 849, 566, 895,
//   995, 752, 171, 488, 320, 459, 465, 290, 394, 525, 589, 699,
//   828, 485, 350,  11,  10, 987, 255, 728, 768, 663, 399, 359,
//   627, 660, 553, 327
// ]

// console.log(selectionSort(unsortedArray));

// let  arr = Array(10).fill(0)
// console.log(arr)

