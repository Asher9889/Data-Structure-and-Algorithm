const arr = [64, 34, 25, 12, 22, 11, 90, 5, 78, 45, 0, 100, 89, 67, 43];

function insertion(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i -1
        for(; j >= 0 && arr[j] > current; j--){
            if(arr[j] > current){
                arr[j+1] = arr[j];
            }
        }
        // to track j need to define it inside outer for loop
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertion(arr))
