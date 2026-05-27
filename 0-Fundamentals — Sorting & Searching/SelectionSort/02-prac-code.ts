/**
 * What is selection Sort?
 * Answere: 1. Pick very first elem form unsorted region and find the best minimum elem index.
 *          2. at the end of loop swap tha elem if index is changed.
 *          3. at every loop sorted region grow by 1 from left to right.
 */

let input = [5,1,4,2,3];
export function selectionSort(arr:number[]):number[]{
    let n = arr.length;

    for(let i = 0; i < n -1; i++){
        let min = i;
        for(let y = i+1; y < n; y++){
            if(arr[y] < arr[min]){
                min = y;
            }
        }
        if(i !== min){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selectionSort(input))