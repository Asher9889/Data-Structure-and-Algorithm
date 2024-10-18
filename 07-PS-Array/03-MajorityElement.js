let nums = [15,15,1,3,3,1,2,15,15,4,15,15,15,15,15]

// which number has most frequency.
/**
 * we can use JS Object but it takes extra memory.
 * Logically we cxan solve this by comparing and canceling each other
 */
function findMajority(arr){
    let majority_elem = 0;
    let majority_count = 0;
    for(let i = 0; i < nums.length; i++){
        if(majority_count == 0){
            majority_elem = arr[i];
        }
        if(majority_elem == arr[i]){
            majority_count++;
        }else{
            majority_count--;
        }
        
    }
    return {
        majority_elem: majority_elem,
        majority_extra_count: majority_count
    }
}

console.log(findMajority(nums));