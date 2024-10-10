let array = [1,2,2,3,3,4,4,4,5,5,6,6,6];
let target = 8;

function countPair(arr, target){
    let start = 0, end = arr.length - 1, pair = 0;
    while(start < end){
        if(arr[start] + arr[end] === target){
            let firstDigit = arr[start], secondDigit = arr[end];
            let freqOfFirstDigit = 1; freqOfSecondDigit = 1;
            if(firstDigit != secondDigit){
                while(arr[start + 1] == firstDigit ){
                    console.log("i am Executing for first digit")
                    freqOfFirstDigit++;
                    start++;
                }
                while(arr[end - 1] == secondDigit ){
                    console.log("i am Executing for last digit")
                    freqOfSecondDigit++;
                    end--
                }
                pair += freqOfFirstDigit * freqOfSecondDigit;
                console.log("Pair is: ", pair)
            } else{
                let freq =  end - start + 1
                 pair += (freq * (freq - 1)) / 2;
                 return pair;
                //  this return is important. at last we get same element then donot iterrate
                // just count the freq and return.
            }
        }if(arr[start] + arr[end] < target){
            start++;
           
        }else{
            end--;
        }
    }
    return pair;
}

console.log(countPair(array, target))