// How to do some of digits
function sumOfDigit(num){
    let length = (String(num).length);
    let sum = 0;
    let number = num
    for(let i=1; i<=length; i++){
        sum = sum + (number % 10)
        number = Math.floor(number/10)
    }
    return sum;
}

console.log(sumOfDigit(123))