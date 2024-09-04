let input = [1,1,0,1,1,1,1,2,2,5,5,1,,1,1,1,1,1, 0,3,1,1];

function maxConsecutiveOne(arr){
    let secondMin = 1;
    let min = 1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i+1] && arr[i] === 1){
            min += 1;
        }else{
            if(min > secondMin ){
                secondMin = min
            };
            min = 1;
        }
    }
    if (secondMin > min){
        return secondMin;
    } else{
        return min;
    }

}

console.log(maxConsecutiveOne(input));