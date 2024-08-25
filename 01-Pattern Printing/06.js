function printStar(n){
    for(let i=1; i<=n; i++){
        let star = "*";
        let str = "";
        let space = " ";
        for(let j=1; j<= (n+i)-1; j++){
            str = str + space;
        }
        for(let k=1; k<=(2*i-1); k++){
            str = str + star;
        }
        console.log(str)
    }
}

printStar(5)

console.log(Math.min(9,10))