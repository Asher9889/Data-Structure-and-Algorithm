let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
]
// It is a 2D Arrya. and Traverse it like a column wise.
// m is row, n is col.
function traverseColWise(arr, m, n){
    let str = "";
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            str = str + arr[j][i] + " ";
        }
    }
    return console.log(str);
}
// traverseColWise(arr, 4, 4) 
// Above code is for printing the element in coloumn wise

function wavePrint(arr, m, n){
    let str = "";
    for(let i = 0; i < n; i ++){
        if(i % 2 ==0 ){
            // Iterate up to down
            for(let j = 0; j < m; j++){
                str += arr[j][i] + " ";
            }
        }else{
            // Iterate down to up
            for(let j = (n-1); j >= 0; j--){
                str += arr[j][i] + " ";
            }
        }
    }
    return console.log(str);
}

wavePrint(arr, 4, 4)