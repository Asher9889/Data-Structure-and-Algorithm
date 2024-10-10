const array = [2,4,3,1,11,13]; 
const target = 15;

// We need  the index of the element where sum of the element is equal to target.
//  First Sorting the Array. To Remember the indexes we will create array inside array

function SumPair(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = [arr[i] , i];
    }
    console.log("Modified Array is :", arr);
    let SortedArray = arr.sort((x,y)=> x[0]- y[0])
    console.log("Sorted Array is : ", SortedArray)

    let start = 0, end = SortedArray.length - 1
    
    while(start < end){
        if(SortedArray[start][0] + SortedArray[end][0] === target){
            console.log ("Indexes is: ", [SortedArray[start][1], SortedArray[end][1]])
            // sum equal to target not increase the start. or may be end
            start++
        }
        else if(SortedArray[start][0] + SortedArray[end][0] < target){
            start++;
        } else{
            end--;
        }
    }
}

console.log(SumPair(array))