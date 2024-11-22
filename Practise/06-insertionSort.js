const arr = [3,3,4,1,0];

// implementing the insertion Sort;
    // ek space create kro then prev se compare kr k jagah de do.

function insertionSort(){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let prev = i-1;
        while(prev >=0 && arr[prev] > current){
            arr[prev+1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = current;
    };
}

insertionSort(arr);
console.log(arr)