function isPalindrome(num){
    let reversedNumber = 0;
    let dup = num;
    if(num < 0){
        return false;
    }

    while (num > 0){
        let digit = num % 10;
        num = Math.floor(num / 10);
        reversedNumber = (reversedNumber * 10) + digit;
    }

    return reversedNumber === dup ? true : false;
}

console.log(isPalindrome(1221))