let input = [8, 2, 1, 4];



/**
 * After i th pass form last i elem get sorted. j - i - 1
 * i = 0 (pass = 1); 
 *  j = 0 8 > 2 swap [2, 8, 1, 4];
 *  j = 1 8 > 1 swap [2, 1, 8, 4];
 *  j = 2 8 > 4 swap [2, 1, 4, 8];
 *  After completing One pass One elem moves to end of the array.
 *  It means j need to skip last elem which is already sorted.
 * i = 1 (pass = 2);
 *  j = 0 2 > 1 swap [1, 2, 4, 8];
 *  j = 1 2 > 4 no swap [1, 2, 4 , 8];
 * After completing pass 2 total 2 elem get sorted.
 * i = 2 (pass = 3);
 *  j = 0; 1 > 2 no swap [1, 2, 4, 8];
 * 
 * 
 * 
 * If no adjacent pair is out of order,
then no global pair is out of order.
 */

function bubbleSort(arr){
    if(arr.length <= 1) return arr;
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let swapped = false;

        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 

                swapped = true;
            }
        }
        // No Swaps => Already Sorted Best Case
        if(!swapped) break;

    }

    return arr;
}

/**
 * Best Case: Best case → O(n)
 * Worst Case: Worst case → O(n²)
 */

console.log(bubbleSort(input))