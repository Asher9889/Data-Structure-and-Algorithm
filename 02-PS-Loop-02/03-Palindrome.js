function isPalindrome(str){
    let newStr = "";
    for(let i=str.length-1; i>=0; i--){
        
        newStr += str[i]
    }
    console.log(newStr)
    if(newStr === str){
        return "True";
    }else{
        return "False";
    }
}

// Note: it is not efficient. Sir teaches us by doing comparison.

console.log(isPalindrome("9"))