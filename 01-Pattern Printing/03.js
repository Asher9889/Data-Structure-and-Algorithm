function printStars(n){
    for(let i =1; i<=n; i++){
        let space = " ";
        let star = "*";
        let string = "";
        for(let j=1; j<= n-i; j++){
            string = string + space;
        }
        for(let k=1; k<=i; k++){
            string = string + star;
        }
        console.log(string);
    }
}

printStars(10)