// Brute Force Approach

const arr = [2,4,3,1,11,13]; 
const target = 15;

function SumPair(array){
    for(let i = 0; i <= array.length-2; i++){
        for(let j = i+1; j <= array.length-1; j++){
            console.log("Pair Checked is", array[i],array[j])
            if(array[i] + array[j] === target){
                console.log("Pair is: ", array[i],array[j])
            }
        }
    }
}

console.log(SumPair(arr))