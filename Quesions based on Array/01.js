// Given an array arr[]. The task is to find the largest element and return it.

let arr = [101,100,9,8,7,56,90,2,500];

function largest(){
    let largest_elem = arr[0]
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest_elem){
            largest_elem = arr[i];
        }
    }
    return largest_elem;
}
  
const largest_elem = largest(arr)
console.log(largest_elem)