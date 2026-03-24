/**
 * What is Hashing?
 * Ans: In a naive term, Prestore something and fetch when required.
 * 
 */

const arr = [23,4,5,4,3,3,23,0,4];



function getFrequency(number:number, arr:number[]): number{

    let maxElem = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxElem){
            maxElem = arr[i];
        }
    }


    const hashArray = new Array(maxElem + 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        hashArray[arr[i]] = hashArray[arr[i]] + 1;
    }

    return hashArray[number];
}

console.log(getFrequency(23, arr));




