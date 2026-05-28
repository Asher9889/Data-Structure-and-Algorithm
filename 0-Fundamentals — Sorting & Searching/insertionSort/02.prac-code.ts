
let input = [5,1,4,2,3];
/**
 * Question: What is Insertion Sort?
 * Answere: 1. assume till 1st elem is sorted. rest not sorted
 *          2. Pick an first elem from unsorted region and comapre it from sorted region left to right.
 *          3. if found bigger elem move it to +1 index and repeat untill found the correct position for current elem.
 *          4. Sorted region will grow right to left.
 * DRY RUN:
 *  input = [5,1,4,2,3];
 *  x = 1;
 *  while( y >= 0 )
 *      y = 1; current = arr[y] = 0;
 *          1 < 5 true  arr[y+1] = arr[y]; y--;
 *      else : arr[y+1] = current;
 * 
 *          
 * 
 *  
 */

function insertionSort(arr:number[]):number[]{

    for(let i = 1; i < arr.length; i++){
        let y = i-1;
        const current = arr[i];
        while( y >= 0 && current < arr[y]){
            arr[y+1] = arr[y];
            y--;
        }
        arr[y+1] = current;
    }
    return arr;
}

console.log(insertionSort(input))