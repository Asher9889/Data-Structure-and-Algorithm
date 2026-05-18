let input = [5,1,4,2,3];

/**
 * Question: What is Bubble sort?
 * Answere: 1. We segrigate an Array into two regions:
 *              - Sorted Region
 *              - Unsorted Region
 *          2. Pick the first elem from unsorted region and swap it to adjacent if bigger.
 *          3. At every pass, Largest elem from unsorted region moves to its correct position..
 *          4. Sorted region expand right end to left.
 */

/**
 * DRY RUN: [5,1,4,2,3];
 * x = 0; largest elem move to end
 *      y = 0; 5 > 1 swap [1,5,4,2,3]
 *      y = 1; 5 > 4 swap [1,4,5,2,3]
 *      y = 2; 5 > 2 swap [1,4,2,5,3]
 *      y = 3; 5 > 3 swap [1,4,2,3,5]
 * x = 1;
 *      y = 0; 1 > 4; noswap [1,4,2,3,5]
 *      y = 1; 4 > 2 swap [1,2,4,3,5]
 *      y = 2; 4 > 3 swap [1,2,3,4,5]
 * x = 2;
 *      y = 0; 1 > 2 noswap
 *      y = 1; 2 > 3 noswap
 * x = 3;
 *      y = 0; 1 > 2 noswap
 */

function bubbleSort(arr:number[]):number[]{

    let n = arr.length - 1;

    if(n <= 1) return arr;
    
    for (let i = 0; i < n; i++){
        let didSwap = false;
        for(let y = 0; y < n - i; y++ ){
            if(arr[y] > arr[y+1]){
                let temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] = temp;
                didSwap = true;
            }
        }
        if(!didSwap) break;
    }

    return arr;
}

console.log(bubbleSort(input));
