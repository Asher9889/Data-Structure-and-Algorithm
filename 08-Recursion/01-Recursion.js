// Recurion is a techinique in which we solve bigger problem by solving the smaller sub problems. We create a function to solve bigger problem and take values in form of argument. 
//  We call the same function to solve the smaller sub problems with different arguments and we get the result by solving the sammler sub problems.


// Question Given a value n. Calculate the n!.

function factorial(n){
    if(n == 1){
        return 1;
    }else{
        return (n * factorial(n-1));
    }

}

function factorialByLoop(n){
    let ans = 1;
    for(let i = n; i >= 1; i--){
        ans = ans * i;
    }
    return ans;
}

// console.log(factorialByLoop(6))

console.log(factorial(5));


//  Lets decyfer what is happening behind the Scene.
//  Magic of recursion lies in the Call Stack.

