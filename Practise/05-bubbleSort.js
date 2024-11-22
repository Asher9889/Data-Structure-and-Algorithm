const arr = [3,3,4,1,0,6];

// implementing the bubble sort

function bubbleSort(arr){
    for(let i = arr.length-1; i >= 0; i--){
        let maximum_elem = i;
        for(let j = 0; j <= i; j ++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr)