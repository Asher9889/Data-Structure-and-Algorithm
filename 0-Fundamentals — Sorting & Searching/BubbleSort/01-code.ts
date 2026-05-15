const arr: number[] = [8, 3, 5, 2, 9];

/**
 * DRY RUN:
 * bubble means in real life science big bubble goes up untill ready at top.
 * In programming move the bigger elem to end of the array by swaping.
 */

/**
 *  [8, 3, 5, 2, 9];
 * Loop x: Index: 0,  Loop: 1 
 *      Loop y: 8 > 3 true Swap => [3,8,5,2,9]
 *      Loop y: 3 > 5 true Swap => [3,5,8,2,9]
 *      Loop y: 5 > 2 true Swap => [3,5,2,8,9]
 *      Loop y: 5 > 9 false NoSwap => [3,5,2,8,9]
 *    When First x iteration completes One elem get fixed to its correct position.
 *    For X loop if total elem is x we need x - 1 iteration.
 * Loop x: Index 1, Loop: 2
 *      Loop y: 8 > 3 true Swap => [3,5,2,8,9]
 *      Loop y: 8 > 2 true Swap => [3,2,5,8,9]
 *      Loop y: 8 > 5 true Swap => [3,2,5,8,9]
 * Loop x: Index 2, Loop: 3
 *      Loop y: 3 > 2 true Swap => [2,3,5,8,9]
 *      Loop y: 3 > 5 false NoSwap => [2,3,5,8,9]
 * Loop x : Index 3, Loop: 4
 *      Loop y: 2 > 3 false NoSwap => [2,3,5,8,9]
 */


function bubbleSort(input: number[]): number[] {
    let arrLength = input.length;

    if (input.length < 1) return input;

    for (let x = 0; x < arrLength - 1; x++) {
        let isSwapper = false;
        for (let y = 0; y < arrLength - 1 - x; y++) {
            if (input[y] > input[y + 1]) {
                let swap = input[y];
                input[y] = input[y + 1];
                input[y + 1] = swap;
                isSwapper = true;
            }
        }
        if (!isSwapper) return input; // use break
        /**
         * Because you're not returning because sorting is “done”.
          *  You're exiting the loop because no swaps happened.
          *  Then function naturally returns once sorting completes.
          *  This improves readability and future maintainability.
         */
    }

    return input;
}

console.log(bubbleSort(arr))

