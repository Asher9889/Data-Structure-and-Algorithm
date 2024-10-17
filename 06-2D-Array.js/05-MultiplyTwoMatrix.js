let a = [
    [1,1],
    [2,2],
    [3,3],
];

let b = [
    [1,1,1],
    [2,2,2],
];

// How to multiply two matrix

// a = 3 * 2, b = 2 * 3
//  We can only multiply when row of first matrix = col of second matrix

function multiplyOfTwoMatrix(a, m, n, b, p, q){
    let c = Array(m);
    // creating 3*3 2D Array
    for(let i = 0; i < c.length; i++){
        c[i] = Array(m).fill(0);
    }
    // for multiplying element
    for(let i = 0; i < m; i++){ // for outer loop row k liye
        for(let j = 0; j < q; j++){
            
            for(let k = 0; k < n; k++){
                c[i][j] += a[i][k] * b[k][j]; 
            }
        }
    }
    console.log(c)
}
multiplyOfTwoMatrix(a, 3,2, b, 2,3)