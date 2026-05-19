/**
 * Question: What is Insertion Sort?
 * Answere: 1. Divide the array into two regions:
 *              - Sorted Region (1st elem is already sorted)
 *              - Unsorted Region
 *          2. Assume 1st elem is already sorted.
 *          3. Pick first elem in unsorted region and compare it to sorted region right to left.
 *          4. Shift larger sorted elements one position to the right until correct position for current element is found.
 *          5. Every Loops expand the sorted region left to right.
 */

/**
 * DRY RUN: [5,1,4,2,3]
 * - [5] Sorted
 * - [1,4,2,3] Unsorted
 * i = 1; j = i-1 = 0; currentElem = arr[i] = 1;
 *      j = 0;
 *      1 < 5 true; shift the unsorted elem to +1 index; [5,5,4,2,3];
 *      j--;
 *      j = -1;
 *      arr[j+1] = currentElem;
 *      [1,5,4,2,3] => [1,5] sorted and [4,2,3] unsorted
 * 
 * i = 2; j = i-1 = 1; currentElem = arr[i] = 4;
 *      j = 1;
 *      4 < 5 true [1,5,5,2,3]
 *      j--;
 *      j = 0;
 *      1 < 4 false
 *      arr[j+1] = currentElem
 *      [1,4,5,2,3] 
 * 
 * i = 3; j = 2; currentElem = 2;
 *      j = 2;
 *      2 < 5 true [1,4,5,5,3]
 *      j--;
 *      j = 1;
 *      2 < 4 true [1,4,4,5,3]
 *      j--;
 *      j = 0;
 *      1 < 2 false:
 *      arr[j+1] = currentElem
 *      [1,2,4,5,3]
 * i = 4; j = 3; currentElem = 5;
 *      j = 3;
 *      3 < 5 true [1,2,4,5,5]
 *      j--;
 *      j = 2;
 *      3 < 4 true [1,2,4,4,5]
 *      j--;
 *      j = 1;
 *      3 < 2 false 
 *      arr[j+1] = currentElem
 *      [1,2,3,4,5]
 */