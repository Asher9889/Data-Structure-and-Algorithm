function printName(name, n){
    if(n === 0) return;
    console.log(name + " ") ;
    printName(name, n-1);
}

printName("Saurabh", 4)