const string = "Saurabh"

// to store frequency we use objects. we needs mapping based data structure.

function getFrequency(str){
    let frequency = {}
    for(let char of str){
        // if we used dot based syntax it try to find key not variable.
        if(!frequency[char]){
            frequency[char] = 1;
        }else{
            frequency[char] += 1;
        }
    }
    return frequency;
}

console.log(getFrequency(string))