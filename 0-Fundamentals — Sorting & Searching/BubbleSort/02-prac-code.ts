/**
 * What is bubble Sort?
 * 1. Bigger elem moves to end of the array. 
 * 2. How to move by swaping.
 * 3. At every loop, 1 elem get settled to it correct position.
 */

let input = [5,1,4,2,3];

/**
 * DRY RUN: 
 * x = 0; 
 *      y = 0; 5 > 1 true swap(5,1) [1,5,4,2,3]
 *      y = 1; 5 > 4 true swap(5,4) [1,4,5,2,3]
 *      y = 2; 5 > 2 true swap(5,2) [1,4,2,5,3]
 *      y = 4; 5 > 3 true swap(5,3) [1,4,2,3,5]
 *  At every outer loop one elem shifted to its correct position. 
 *  now from next inner loop no need to go for last sorted elem.
 * x = 1; y(max) = arr.length - 1 - i;
 *      y = 
 *      
 */

function bubbleSort(arr :number[]): number[]{
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let isSwapped = false;
        for(let y = 0; y < n - 1 -i; y++){
            if(arr[y] > arr[y+1]){
                let temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] = temp;

                isSwapped = true;
            }
        }
        if(!isSwapped) break; // without this alreadt sorted array TC O(n ** 2). now For Sorted Array O(n)
    }

    return arr;
}

console.log(bubbleSort(input))