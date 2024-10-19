let nums = [4,2,1,2,1]
/**
output should be 4;
If nums = [1] , Output = 1;
Total 2 Approach
1. By making JS Object
2. Bit Wise XOR operator
*/ 
function singleNumber(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result ^ arr[i];
    }
    return console.log(result)
}

singleNumber(nums) // output = 4;

