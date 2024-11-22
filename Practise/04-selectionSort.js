const arr = [3,3,4,1,0,6];
const nums = [334, 889, 9, 153, 917, 887, 139, 518, 247, 603, 869, 236, 284, 4, 779, 587, 277, 198, 625, 617, 176, 772, 132, 613, 901, 286, 289, 278, 711, 904, 259, 426, 714, 718, 340, 464, 169, 438, 841, 493, 599, 969, 399, 94, 669, 24, 689, 779, 584, 706, 900, 886, 73, 953, 733, 53, 177, 769, 871, 101, 709, 774, 55, 517, 161, 843, 183, 475, 308, 665, 108, 947, 899, 12, 375, 136, 700, 552, 536, 407, 847, 811, 141, 794, 854, 478, 848, 411, 672, 210, 63, 905, 98, 4, 88, 713, 461, 404, 493, 757]


// implementing selection sort

function selection(arr){
    for(let i = 0; i < arr.length; i++){
        let minimum_elem_index = i;
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[minimum_elem_index]){
                minimum_elem_index = j;
            }
        }
        if(minimum_elem_index != i){
            let temp = arr[i];
            arr[i] = arr[minimum_elem_index];
            arr[minimum_elem_index] = temp;
        }
    }

    return arr;
}

selection(nums);
console.log(nums);