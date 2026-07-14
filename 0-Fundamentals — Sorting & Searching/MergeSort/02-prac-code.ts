let input = [5,1,4,2,3];

/**
 * What is Merge Sort?
 * It is Divide and Conquer based based algo implemented usng recursion.
 * Divide the arrya into sub array untill elem length reached to 1.
 * Now Sort them.
 */


function merge(low:number, mid:number, high:number, arr:number[]){
    let i = low;
    let j = mid+1;
    let result: number[] = [];

    while(i <= mid && j <= high){
        if(arr[i] < arr[j]){
            result.push(arr[i]);
            i++;
        }else{
            result.push(arr[j]);
            j++;
        }
    }

    while(i <= mid){
        result.push(arr[i]);
        i++;
    }
    while(j <= high){
        result.push(arr[j]);
        j++;
    }

    for(let i = 0; i < result.length; i++){
        arr[i+low] = result[i];
    }

}

export function mergeSort(low:number, high:number, arr:number[]):number[]| void{

    if(low >= high) return;

    let mid = Math.floor((low + high)/2);

    mergeSort(low, mid, arr);
    mergeSort(mid+1, high, arr);
    merge(low, mid, high, arr);
    return arr;
}

mergeSort(0, 4,input)

console.log(input);




