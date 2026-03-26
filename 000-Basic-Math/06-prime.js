/**
 * As we know Prime means it should only have two divisors.
 */
function isPrime(num){
    let last = Math.floor(Math.sqrt(num));
    let count = 0;
    for(let i = 1; i <= last; i++){
        if(num % i === 0 ){
            count++;

            if(num / i !== i){
                count++;
            }
        }
    }
    return count === 2 ? true : false;
}

console.log(isPrime(14))