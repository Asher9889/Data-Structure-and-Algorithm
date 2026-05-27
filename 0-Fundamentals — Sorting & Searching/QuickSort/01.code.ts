/**
 * Qustion: What is Quick Sort?
 * Answere: 1. It is a sorting alog, Sorts using DNC algo using IN-PLACE Partitioning.
 *          2. It is partition-based recursive sorting. (merge sort without merge array extra space)
 */


const input = [5,1,4,2,3];

export function partitionIndex(start:number, end:number, arr:number[]):number{

    let pivot = arr[start];
    let i = start;
    let j = end;

    while(i < j){
        while(i <= end && arr[i] <= pivot){
            i++;
        } 
        while(j >= start && arr[j] > pivot){
            j--;
        }
        // now swap i and j
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }


    


}