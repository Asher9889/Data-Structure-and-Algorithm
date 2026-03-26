/**
 * Print all Divisors of a given Number
 * Problem Statement: Given an integer N, return all divisors of N.
 * A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
 *  Input: N = 36
    Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]  
    Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
    Input: N = 12
    Output: [1, 2, 3, 4, 6, 12]
    Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.
*/

// Brute Froce
function printAllDivisor(num){
    let divisors = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            divisors.push(i);
        } 
    }

    return divisors;
}

// optimal Approach 
function printAllDivisorOptimal(num){
    let last = Math.floor(Math.sqrt(num)); // decreased the loop length.
    let divisor = [];
    for(let i = 1; i <= last; i++){
        if(num % i === 0){
            divisor.push(i);

            if(num/i !== i){
                divisor.push(num/i);
            }
        }
    }

    divisor.sort((a, b) => a - b)

    return divisor;

}

console.log(printAllDivisorOptimal(36))