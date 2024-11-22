// Given an array arr[]. The task is to find the largest element and return it.

let arr = [1,8,7,56,90,2];

function largest(arr){
    let largestElem = 0
    let j = largestElem;
    while(j < arr.length){
        if(arr[j] > arr[largestElem]){
            largestElem = j;
            j++;
        }
    }
    return largestElem;

}
largest(arr)