/**
 * if input is 6 then print 6 lines along with 6times.
 * n = 2;
 * outpuyt should be = **
 *                     **
*/

input = 10
for(let i = 1; i<= input; i++){ 
    let p = "";
    for(let j = 1; j<=input; j++){
        p= p + "*"
    }
    console.log(p)
}