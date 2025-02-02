const arr = [6,-1,5,4,-2,0,8];


function selectionSort(arr){
    // here we are playing with indexes;
    for(let i = 0; i < arr.length - 1; i++){
       let current_smallest = i;
       for(let j = i + 1; j < arr.length - 1; j++){
        if(arr[j] < arr[current_smallest]){
            current_smallest = j;
        }
       }
       if(current_smallest !== i){
        const swap = arr[i];
        arr[i] = arr[current_smallest];
        arr[current_smallest] = swap;
       }
    }
    return arr;
}

console.log(selectionSort(arr));
