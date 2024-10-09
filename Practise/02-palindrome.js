const string = "madam";
function checkPalindrome(str){
    const i = 0;
    const j = str.length;
    for(let k=1; k<=Math.floor(j/2) + 1; k++){
        if(str[i] === str[j]){
            if(i>j) return;
            i++;
            j--;
            console.log("k is: ", k, "i is: ",i, "j is: ",  j)
        }else{
            return "String is not a palindrome";
        }
    }
}

console.log(checkPalindrome(string));