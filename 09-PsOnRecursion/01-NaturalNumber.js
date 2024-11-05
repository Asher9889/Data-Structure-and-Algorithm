// Print n Natural Number recursively in Increasing order.

function print(n) {
    if(n < 1) return
    print(n-1);
    console.log(n)
}

console.log(print(8))