function printStar(n){
    for(let i=1; i<=n; i++){
        let str= "";
        const star = "*";
        for(let j=1; j<=(n-i)+1; j++){
            str += star;
        }
        console.log(str)
    }
}

printStar(5)