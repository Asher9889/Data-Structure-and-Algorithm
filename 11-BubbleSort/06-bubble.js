const arr = [64, 34, 25, 12, 22, 11, 90, 5, 78, 45, 0, 100, 89, 67, 43];

function bubble(arr){
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble(arr))