let arr = [18,9,24,3,20,0,1,3,4,5];

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(arr){
    // outer loop : we get one single elem at last that's why no need to do comparison
    let n = arr.length;
    for(let i = n-1; i >= 1; i--){
        // i ko ulta chalaya taki j to track kr paye
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j, j+1)
            }
        }
    }
}

bubbleSort(arr);

console.log(arr)