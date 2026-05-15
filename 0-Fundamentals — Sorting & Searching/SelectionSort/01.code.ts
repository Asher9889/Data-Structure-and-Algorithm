/**
 * Selection Sort. We find the best minimum elem for 0th index by comparing and at the last we swap.
 * 
 */

const arr: number[] = [8, 3, 5, 2, 9];

/**
 * DRY RUN:
 * x = 0;
 *      y = 1; 3 < 8 True Swap  => [3,8,5,2,9]
 *      y = 2; 5 < 3 False NoSwap => [3,8,5,2,9]
 *      y = 3; 2 < 3 True Swap => [2,8,5,3,9]
 *      y = 4; 9 < 2 False NoSwap => [2,8,5,3,9]
 * x = 1;
 *      y = 2; 5 < 8 False NoSwap => [2,5,8,3,9]
 *      y = 3; 3 < 5 True Swap => [2,3,8,5,9]
 *      y = 4; 9 < 3 False NoSwap => [2,3,8,5,9]
 * x = 2;
 *      y = 3; 5 < 8 True Swap => [2,3,5,8,9]
 *      y = 4; 9 < 5 False NoSwap => [2,3,5,8,9]
 * x = 3;
 *      y = 4; 9 < 8 False NoSwap => [2,3,5,8,9]       
 * 
 * Current implementation is a Hybrid Apprach of Bubble + Selection Sort?
 * Why to swap immediately after comparison. 
 * Store the index, At the end Swap.
 */


// Bubble + Selection Sort
function hybridSelectionSort(arr: number[]): number[] {

    if(arr.length <= 1) return arr;

    for (let i = 0; i < arr.length; i++) {
        for(let y = i + 1; y < arr.length; y++  ){
            if(arr[y] < arr[i]){
                let swap = arr[i];
                arr[i] = arr[y];
                arr[y] = swap;
            }
        }
    }
    return arr;

}
console.log(hybridSelectionSort(arr))

// const arr: number[] = [8, 3, 5, 2, 9];

/**
 * let isPossible = x;
 * x = 0;  // isPossible = y;  
 *      y = 1;  3 < 8; true; isPossibleIndex = 1;  
 *      y = 2;  5 < 3; false; isPossibleIndex = 1;  
 *      y = 3;  2 < 3; true; isPossibleIndex = 3;
 *      y = 4;  9 < 2; false isPossibleIndex = 3;
 *      if(arr[0] !== arr[isPossibleIndex]){
 *          temp = arr[0];
 *          arr[0] = arr[isPossibleIndex];
 *          arr[isPossibleIndex] = temp;  
 *      }
 */
function selectionSort(arr:number[]): number[]{




    return arr;
}
