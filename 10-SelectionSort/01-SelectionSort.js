/**
 * Basically we are swaping the element. Unsorted regin to sorted region of the array
 */

 let nums = [2, 41, -2, 1, 5, 3, 7, -8, 12];
 let nums2 = [1,2,3,4,5,6,7,8,9];

function sortedArray(arr) {
  // Swaping the element
  function swap(i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let current_smallest_index = i;
    // let toBeSmallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[current_smallest_index]) {
        current_smallest_index = j;
      }
    }
    if(i != current_smallest_index){
        swap(i, current_smallest_index)
    }
    
  }
  return arr;
}

console.log(sortedArray(nums2));




// Chat GPT

// let nums = [2, 41, -2, 1, 5, 3, 7, -8, 12];

// function sortedArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let smallest_elem = arr[i];
//     let toBeSmallestIndex = i; // Initialize to current index i

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < smallest_elem) {
//         smallest_elem = arr[j];
//         toBeSmallestIndex = j;
//       }
//     }

//     if (i !== toBeSmallestIndex) {
//       // Swap elements
//       let temp = arr[i];
//       arr[i] = arr[toBeSmallestIndex];
//       arr[toBeSmallestIndex] = temp;
//     }
//   }
//   return arr;
// }

// console.log(sortedArray(nums));

