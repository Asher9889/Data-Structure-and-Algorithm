// Check  the array is sorted or not?

let arr = [1,2,2,3,3,2,4];

function isSortedArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }else{
            return true;
        }
    }
}

console.log(isSortedArray(arr))

