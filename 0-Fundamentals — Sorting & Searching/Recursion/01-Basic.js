/**
 * What is recursion?
 * Fn calling itself untill a specific condition is met.
 */

function printOneToN(number){
    // if(number < 1) return;
    console.log(number);
    printOneToN(number -1);
}

printOneToN(10)