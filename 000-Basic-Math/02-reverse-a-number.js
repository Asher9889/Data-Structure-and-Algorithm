/**
 * Reverse Digits of A Number
 * Problem Statement: Given an integer N return the reverse of the given number.
 * Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
 */

let number = 12345;

function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let mod = num % 10;
        reversed = reversed * 10 + mod;
        num = Math.floor(num / 10)

    }
    return reversed;  
}

console.log(reverseNumber(987654000))
