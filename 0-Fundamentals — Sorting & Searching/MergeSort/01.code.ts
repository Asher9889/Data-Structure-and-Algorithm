/**
 * Question: What is Merge Sort?
 * Answere: It is a divide & conquer algorithum implemented using recursion.
 *          It is not a in-place algo. Uses extra memory.
 */

/**
 * [5,1,4,2,3]
 * DRY RUN;
 *  mergeSort(start, end, arr){
 *   if(start >= end) return;
 *   let mid = Math.floor((start + end)/2);
 *   mergeSort(start, mid, arr);
 *   mergeSort(mid+1, end, arr);
 *   merge(start, mid, end, err);
 *  }
 *  Call Stack:
 *  arr = [5,1,4,2,3]
 *  start = 0; end = 4
 *  1. mergeSort(0, 4, arr);
 *      mid = 2;
 *  start = 0; end = 2; 
 *  2. mergeSort(0, 2, arr);
 *      mid = 1;
 *  start = 0; end = 1;
 *  3. mergeSort(0, 1);             
 *      mid = 0;                        
 *  start = 0; end = 0;             
 *  4. mergeSort(0, 0, arr);                 5. mergeSort(1,1, arr);      6. merge(0, 0, 1, arr);
 *  it is a base case. Now mental                start == end return;
 *  model array has only 1 elem.
 * 
 * 
 */

function merge(start: number, mid: number, end: number, arr: number[]): void {

    let i = start;
    let j = mid + 1;

    let result: number[] = [];
    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        result.push(arr[i]);
        i++;
    }

    while (j <= end) {
        result.push(arr[j]);
        j++;
    }

    for (let i = 0; i < result.length; i++) {
        arr[start + i] = result[i];
    }
}

let input = [5, 1, 4, 2, 3]
function mergeSort(start: number, end: number, arr: number[]): void {
    // base case
    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);
    mergeSort(start, mid, arr);
    mergeSort(mid + 1, end, arr);
    merge(start, mid, end, arr);

}

mergeSort(0, 4, input);

console.log(input)

