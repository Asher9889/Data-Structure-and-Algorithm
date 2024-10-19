let nums1 = [2, 8, 2, 9, 4, 5, 5, 2];
let nums2 = [2, 8, 7, 3, 1, 9, 9, 4, 4];

/**
 * Find the unique from both array.
 * Approach 01: Create obje to map frequency
 *
 *  */

function countCommon(nums1) {
  let frequencyNums1 = {};

  for (let i = 0; i < nums1.length; i++) {
    if (frequencyNums1[nums1[i]]) {
        frequencyNums1[nums1[i]]++;
    } else {
        frequencyNums1[nums1[i]] = 1;
    }
  }
  console.log(frequencyNums1);

  let frequencyNums2 = {};
  for (let i = 0; i < nums2.length; i++) {
    let element = nums2[i];

    if (frequencyNums1[element]) {
      frequencyNums2[element] = 1;
    } 
  }

  return console.log(Object.keys(frequencyNums2))
//   console.log(frequencyNums2)


}

countCommon(nums1);
