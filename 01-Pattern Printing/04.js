function printStar(n){
    for(let i=1; i<=n; i++){
        let str = "";
        let space = " ";
        let star = "*";
        // priting space
        for(let j=1; j<= n-i; j++){
            str = str + space;
        }
        // prinitng star
        for(let k=1; k<= (2*i)-1; k++){
            str = str + star;
        }
        console.log(str);
    }
}

printStar(10)