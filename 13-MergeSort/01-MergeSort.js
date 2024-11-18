/**
 * In the merge Sort, what happens is ,First it divides an array into two parts and recursively sort both array. Once array get sorted simply merge them.
 *
 */

function mergeSort(arr, i, j) {
    // Handeling the BAse Case. i == j it means array has a single Element. i > j never goes to happen its a false condition.
    if( i > j) return;
    if(i == j) return;
  /**
   * Step 01: Recursively Divide the Array into two halves.
   *          Untill each array becomes length of 1.
   *  */

  //---->  For creating half, we need mid point.
  let half = Math.floor((i + j) / 2);
  mergeSort(arr, i, half);
  mergeSort(arr, half + 1, j);

  //----> Till here we recursilevly tranform the rray into sub array. now each array is length of 1.
}

let nums = [10,5,-2,4,0,4,78,25,-56,12]

mergeSort(nums,0,9); 