const input = [8,2,5,1,4];

/**
 * DRY RUN
 * Note: Keep Swaping by adjacent untill bigger elem get reach to its correct position.
 * total length = 5
 * loop x = 0; 1st loop length = 4;  y = 5-1-0
 *      y = 0; 8 > 2 true swap => [2,8,5,1,4]
 *      y = 1; 8 > 5 true swap => [2,5,8,1,4]
 *      y = 2; 8 > 1 true swap => [2,5,1,8,4]
 *      y = 3; 8 > 4 true swap => [2,5,1,4,8]
 *      we need n-1 iteration. and every iteration 1 elem gets to it correct position.
 * loop x = 1; 2nd loop; length = 3 y = 5-1-1
 *      y = 0; 2 > 5 false noswap => [2,5,1,4,8]
 *      y = 1; 5 > 1 true swap => [2,1,5,4,8]
 *      y = 2; 5 > 4 true swap => [2,1,4,5,8]
 * loop x = 2; 3rd loop
 *      y = 0; 2 > 1 true swap => [1,2,4,5,8]
 *      y = 1; 2 > 4 false noswap => [1,2,4,5,8]
 * loop x = 3; 4th loop
 *      y = 0; 1 > 2 false noswap => [1,2,4,5,8]
 *  
 */
// [8,2,5,1,4];
function bubbleSort(input:ReadonlyArray<number>):number[]{
    const arr = [...input];
    let n = arr.length;

    if(n <= 1) return arr;

    for(let i = 0; i < n-1; i++){
        let isSwapped = false;
        for(let j = 0; j < n-1-i; j++ ){
            if(arr[j] > arr[j+1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap

                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }

    return arr;
}