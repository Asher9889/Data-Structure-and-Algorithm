let arr = [10,2,-2,255,6,-5,52,56,52];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
       let minimum = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        }
        if(minimum !== i){
            let temp = arr[i];
            arr[i] = arr[minimum];
            arr[minimum] = temp;
        }
    }
    return arr;
}
console.log(selectionSort(arr));
