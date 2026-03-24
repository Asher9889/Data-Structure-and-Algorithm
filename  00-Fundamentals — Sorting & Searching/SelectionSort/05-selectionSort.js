let nums = [23, 8, 45, 85, 64, 23, 94, 2, 15];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        if(smallest !== i){
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp

        }
    }
    return arr;
}

console.log(selectionSort(nums))