let arr = [3,8,4,9,2,7,5];

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current_elem = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current_elem){
            arr[j + 1] = arr[j];
            j--;
        }
    arr[j+1] = current_elem;
    }
}

insertionSort(arr);
console.log(arr);