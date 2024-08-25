// Fibonacci number is: 0 1 1 2 3 5 8 13 21....
// first two digits always need as a starter

function printFibonacci(n) {
  if (n == 0) {
    console.log("0");
    return;
  }
  if (n == 1) {
    console.log(0);
    console.log(1);
    return;
  }
  let last = 0;
  let secondLast = 1;
  console.log(last);
  console.log(secondLast);
  for (let i = 2; i <= n; i++) {
    let sum = last + secondLast;
    console.log(sum);
    last = secondLast;
    secondLast = sum;
  }
}

printFibonacci(10);
