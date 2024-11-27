// find the 2nd most largest element without Sorting.

let arr = [3,13,13,14,0,0,4,6,11,20, 15];
let nums = [ 1,2,4,7,7,5]

function secondLargest(arr){

    let largest = arr[0];
    let slargest = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            slargest = largest;
            largest = arr[i];
           
        }
        if(arr[i] > slargest && arr[i] < largest){
            slargest = arr[i];
        }
        
    }
    return {largest, slargest};
}

console.log(secondLargest(arr));