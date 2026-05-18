/**
 * Question: What is Insertion Sort?
 * Answere: 1. Divide the Arrya into two region:
 *              - Sorted Region
 *              - Unsorted Region
 *          2. We assume 1st elem of array is already sorted.
 * 
 *          3. Pick an element from the beginning of the unsorted region.
 *
 *          4. Compare it backward with elements in the sorted region.
 *          Shift larger sorted elements one position to the right
 *          until the correct position for current element is found.
 *
 *          5. Insert the current element into its correct position.
 *
 *          6. After every pass, the sorted region grows from left to right.
 */

/**
 * DRY RUN: [5,1,4,2,3]
 * 
 * Sorted Region = [5]
 * Unsorted Region = [1,4,2,3]
 * 
 * x = 1;
 *      current = arr[i];
 *      j = x-1 = 0;
 *      1 < 5 true => [5,5,4,2,3]
 *      j--;
 *      
 *      j = -1;
 *      arr[j+1] = current
 *      [1,5,4,2,3]
 * x = 2
 *      current = arr[2]; = 4
 *      j = x-1; 1;
 *      4 < 5 true => [1,5,5,2,3];
 *      j--;
 *      j = 0;
 *      4 < 1 false
 *      arr[j+1] = current;
 *      [1,4,5,2,3]
 * x = 3;
 *      current = arr[3] = 2
 *      j = x-1 = 2;
 *      2 < 5 true => [1,4,5,5,3];
 *      j--;
 *      j = 1;
 *      2 < 4 true => [1,4,4,5,3];
 *      j--;
 *      j = 0;
 *      2 < 1 false
 *      arr[j+1] = [1,2,4,5,3];
 * x = 4;
 *      current = arr[4] = 3;
 *      j = x-1; = 3;
 *      3 < 5 true [1,2,4,5,5];
 *      j--;
 *      j = 2;
 *      3 < 4 true [1,2,4,4,5];
 *      j--;
 *      j = 1;
 *      3 < 2 false;
 *      arr[j+1] = current;
 *      [1,2,3,4,5]
 */

let input = [5,1,4,2,3]
export function insertionSort(arr: number[]):number[]{

    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && current < arr[j]){
            arr[j+1] = arr[j]
            j--; 
        }
        arr[j+1] = current;
    }

    return arr;
}

console.log(insertionSort(input))