/**
 * Reverse Digits of A Number
 * Problem Statement: Given an integer N return the reverse of the given number.
 * Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
 */

let number = 12345;

// works for only positive number
/**
 * T.C: O(Log(n));
 * S.C: 0(1);
 */
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let mod = num % 10;
        reversed = reversed * 10 + mod;
        num = Math.floor(num / 10)

    }
    return reversed;  
}


function optimisedReversedNumber(num){
    let INT_MIN = - (2 ** 31);
    let INT_MAX = 2 ** 31 - 1;

    if (num < INT_MAX || num > INT_MIN){
        return 0;
    }

    let isNegative = false;
    let reverseNumber = 0;

    if(num < 0){
        isNegative = true;
        num = Math.abs(num);
    }

    while(num > 0){
        let lastDigit = num % 10;
        reverseNumber = (reverseNumber * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -reverseNumber : reverseNumber


}
console.log(optimisedReversedNumber(1534236469))
