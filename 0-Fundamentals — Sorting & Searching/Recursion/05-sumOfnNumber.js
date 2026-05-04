function sumOfNumber(n){
    let sum = 0;
    if (n <= 0 ) return;

    for(let i = 1; i <=n; i++){
        sum = sum + i;
    }
    return sum;
}


function sumOfNumberUsingRecursion(n){
    if(n === 0) return 0;
   
    let sum = n + sumOfNumberUsingRecursion(n-1);

    return sum;
}


console.log(sumOfNumberUsingRecursion(100))