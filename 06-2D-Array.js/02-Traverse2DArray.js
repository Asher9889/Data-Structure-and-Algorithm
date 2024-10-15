let arr = [ [1,2,3], [4,5], [6,7,8,9], [10,11], [12,13,14,15,16,17]];

// How to print all the element from the Array.
// How to Traverse the array.

function displayArray(array){
    let value = "";
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            value = value + array[i][j] + " ";
        }
    }
    return value;

}

console.log(displayArray(arr));
