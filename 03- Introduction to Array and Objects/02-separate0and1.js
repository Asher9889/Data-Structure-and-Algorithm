let array = [1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0]

// arrange the array in a way that all zeros comes before 1
// we can mutate array so dont create new array
// mutate the current array the arrange it.
// only traverse array once.
function swap(arr, i, j){
    let temp  = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function separate1and0(arr){
    let i = 0;
    let j = arr.length-1;
    while(i <= j){
        if(arr[i] == 1){
            swap(arr,i,j)
            j--;
        }else{
            i++;
        }
    }
    return arr;
}
separate1and0(array);
console.log(array)