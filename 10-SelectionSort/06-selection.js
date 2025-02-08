const arr = [64, 34, 25, 12, 22, 11, 90, 5, 78, 45, 0, 100, 89, 67, 43];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++ ){
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}


console.log(selectionSort(arr));