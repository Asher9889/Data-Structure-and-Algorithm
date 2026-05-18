let input = [5,1,4,2,3];

/**
 * Question: What is Selection Sort?
 * Answere: 1. Divide the array in two regions: 
 *              - Sorted region.
 *              - Unsorted region.
 *          2. Assume the first elem of an unsorted region is minimum.
 *          3. Traverse the remaining unsorted region and find the actual minimum element.
 *          4. Swap the actual minimum element to first element of the unsorted region.
 *          5. After each pass, Sorted region is grow by 1.
 */

/**
 * DRY RUN:
 * x = 0; min = arr[x];  minElemIndex = x;
 *      y = 1; 1 < 5 true minElemIndex = 1;
 *      y = 2; 4 < 1 false 
 *      y = 3; 2 < 1 false
 *      y = 4; 3 < 1 false
 *      
 *      swap(0, 1);
 *      [1,5,4,2,3];
 * x = 1; min = arr[x]; minElemIndex = x;
 *      y = 2; 4 < 5 true minElemIndex = 2;
 *      y = 3; 4 < 2 true minElemIndex = 3;
 *      y = 4; 3 < 2 false 
 *      swap(1, 3);
 *      [1,2,4,5,3]
 * x = 2; min = arr[x]; minElemIndex = x;
 *      y = 3; 5 < 4 false 
 *      y = 4; 3 < 4 true minElemIndex = 4;
 *      swap(2, 4);
 *      [1,2,3,5,4];
 * x = 3; min = arr[x] minElemIndex = x;
 *      y = 4; 4 < 5 true minElemIndex = 4;
 *      swap(3,4)
 *      [1,2,3,4,5]
 *      
 */

export function selectionSort(arr:number[]): number []{
    let n = arr.length;

    for(let i = 0; i < n; i++ ){
        let minElem = arr[i];
        let minIndex = i;
        for(let y = i + 1;  y < n; y++){
            if(arr[y] < minElem){
                minElem = arr[y];
                minIndex = y;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;

}

console.log(selectionSort(input))