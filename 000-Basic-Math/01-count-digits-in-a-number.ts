/**
 * Count digits in a number
 * Problem Statement: Given an integer N, return the number of digits in N.
 *  Example 1:
    Input:N = 12345
    Output:5
    Explanation:  The number 12345 has 5 digits.
                            
    Example 2:
    Input:N = 7789              
    Output: 4
    Explanation: The number 7789 has 4 digits.  
 * 
 */

function printAllDigits(num: number): number {
    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count += 1;
    }
    return count;
} 

console.log(printAllDigits(2345766))

/**
 * Time Complexity will be O(log N) where N is the input number. This is because we are dividing the number by 10 in each iteration, which reduces the number of digits by one Which is very fast.
 * Space Complexity will be O(1) as we are using only a constant amount of space to store the count variable.
 */
