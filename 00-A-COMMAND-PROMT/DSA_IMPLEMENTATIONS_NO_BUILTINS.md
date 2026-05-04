# DSA Implementations - No Built-in Methods

## NEVER Use Array.sort(), Array.find(), Array.map(), etc.

This file shows you HOW to implement common algorithms from scratch for MERN.

---

## Part 1: Sorting Algorithms

### 1. Bubble Sort - O(n²)
```javascript
/**
 * Bubble Sort - Compares adjacent elements and swaps if wrong order
 * Time: O(n²) average/worst, O(n) best (already sorted)
 * Space: O(1) - in-place
 * 
 * MERN Usage: Never in production. Only for learning.
 * 
 * Real scenario: 1M products sorted by price
 * - Bubble sort: 10^12 operations = TOO SLOW
 * - Quick sort: 20M operations = FAST
 */
function bubbleSort(arr) {
  const n = arr.length;
  
  // Outer loop: each pass moves one element to correct position
  for (let i = 0; i < n; i++) {
    let swapped = false;
    
    // Inner loop: compare adjacent pairs
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare current with next
      if (arr[j] > arr[j + 1]) {
        // Swap if in wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    
    // Optimization: if no swaps, already sorted
    if (!swapped) break;
  }
  
  return arr;
}

// Execution example: [64, 34, 25]
// Pass 1: 
//   Compare 64,34 → swap → [34, 64, 25]
//   Compare 64,25 → swap → [34, 25, 64]
// Pass 2:
//   Compare 34,25 → swap → [25, 34, 64]
// Result: [25, 34, 64]
// Operations: 3 comparisons + 3 swaps + 3 comparisons = ~6 operations
// For n=3, typical case

console.log(bubbleSort([64, 34, 25, 12, 22]));
```

---

### 2. Selection Sort - O(n²)
```javascript
/**
 * Selection Sort - Find minimum, move to front, repeat
 * Time: O(n²) always (no best case optimization)
 * Space: O(1) - in-place
 * 
 * MERN Usage: Slightly better than bubble but still avoid
 * 
 * Why worse than bubble?
 * - Bubble: Early exit if sorted
 * - Selection: Always does n² comparisons
 */
function selectionSort(arr) {
  const n = arr.length;
  
  // For each position
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    // Find minimum in remaining unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap minimum with current position
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  
  return arr;
}

// Execution example: [64, 34, 25, 12, 22]
// Round 1: Find min (12), swap with 64 → [12, 34, 25, 64, 22]
// Round 2: Find min in [34,25,64,22] (22), swap with 34 → [12, 22, 25, 64, 34]
// Round 3: Find min in [25,64,34] (25), no swap → [12, 22, 25, 64, 34]
// Round 4: Find min in [64,34] (34), swap with 64 → [12, 22, 25, 34, 64]
// Result: [12, 22, 25, 34, 64]

console.log(selectionSort([64, 34, 25, 12, 22]));
```

---

### 3. Merge Sort - O(n log n) guaranteed
```javascript
/**
 * Merge Sort - Divide and conquer approach
 * Time: O(n log n) guaranteed (best, average, worst all same)
 * Space: O(n) - needs temporary array for merging
 * Stable: Yes - maintains relative order of equal elements
 * 
 * MERN Usage: Great for guaranteed performance
 * 
 * Real scenario: Sorting feed items by engagement
 * - Need stable sort (equal engagement items maintain order)
 * - Need guaranteed performance (not worst-case O(n²))
 * - Merge sort is perfect
 * 
 * Why stable matters?
 * Products with same rating should keep their original order
 * New products appear last among equal-rated items
 */
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are sorted
  if (arr.length <= 1) return arr;
  
  // Divide: split array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Conquer: recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Combine: merge sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIdx = 0, rightIdx = 0;
  
  // Compare elements from both arrays and add smaller one
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  
  // Add remaining elements (one array will be exhausted)
  while (leftIdx < left.length) {
    result.push(left[leftIdx]);
    leftIdx++;
  }
  
  while (rightIdx < right.length) {
    result.push(right[rightIdx]);
    rightIdx++;
  }
  
  return result;
}

// Execution example: [38, 27, 43, 3]
// Split → [38, 27] and [43, 3]
// Split → [38], [27], [43], [3]
// Merge [38],[27] → [27, 38]
// Merge [43],[3] → [3, 43]
// Merge [27,38],[3,43] → [3, 27, 38, 43]

console.log(mergeSort([38, 27, 43, 3]));
```

---

### 4. Quick Sort - O(n log n) average, O(n²) worst
```javascript
/**
 * Quick Sort - Partition-based divide and conquer
 * Time: O(n log n) average, O(n²) worst case
 * Space: O(log n) - recursive call stack
 * Stable: No (order of equal elements may change)
 * 
 * MERN Usage: Most used in practice. Fast and space-efficient.
 * 
 * Real scenario: Sorting 1M user posts
 * - Average case: 20M operations = FAST
 * - Worst case: 10^12 operations = RARE (with random pivot)
 * - Space efficient: only log(n) extra space
 * 
 * Why it's fast in practice?
 * - Good cache locality
 * - In-place (no extra arrays)
 * - Average case is O(n log n)
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition and get pivot index
    const pivotIdx = partition(arr, low, high);
    
    // Recursively sort left and right portions
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }
  
  return arr;
}

function partition(arr, low, high) {
  // Choose random pivot to avoid worst case
  const randomIdx = low + Math.floor(Math.random() * (high - low + 1));
  [arr[randomIdx], arr[high]] = [arr[high], arr[randomIdx]];
  
  const pivot = arr[high]; // Use last element as pivot
  let i = low - 1; // Index of smaller element
  
  // Partition: move smaller elements to left, larger to right
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Execution example: [64, 34, 25, 12, 22]
// Pivot = 22
// Partition: smaller left [12], larger right [64, 34, 25]
// Result: [12, 22, 64, 34, 25]
// Recursively sort both sides

console.log(quickSort([64, 34, 25, 12, 22]));
```

---

## Part 2: Searching Algorithms

### 1. Linear Search - O(n)
```javascript
/**
 * Linear Search - Check each element in order
 * Time: O(n) - might need to check all elements
 * Space: O(1) - no extra space
 * 
 * MERN Usage: Small datasets, unsorted data
 * 
 * Real scenario: Finding user by email in small list
 * - 100 users: 50 avg checks = acceptable
 * - 1M users: 500k avg checks = TOO SLOW
 *   → Use MongoDB index instead (O(log n))
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}

// MERN example: Finding specific user feedback
function findUserComment(comments, userId) {
  // comments = small array from single post
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].userId === userId) {
      return comments[i];
    }
  }
  return null;
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // 2
```

---

### 2. Binary Search - O(log n)
```javascript
/**
 * Binary Search - Divide and conquer on SORTED array
 * Time: O(log n) - half array each iteration
 * Space: O(1) - iterative version
 * Requirement: Array MUST be sorted
 * 
 * MERN Usage: Indexed MongoDB queries, autocomplete
 * 
 * Complexity comparison:
 * - Linear: 1M items = 500k avg checks
 * - Binary: 1M items = 20 checks
 * 
 * Real scenario: Finding user by ID in paginated results
 * - Results already sorted by ID? Use binary search
 * - Results not sorted? Use MongoDB index (which uses binary search internally)
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    // Calculate middle to avoid overflow
    const mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      // Target is in right half
      left = mid + 1;
    } else {
      // Target is in left half
      right = mid - 1;
    }
  }
  
  return -1; // Not found
}

// Execution example: Find 30 in [10, 20, 30, 40, 50]
// Iteration 1: left=0, right=4, mid=2, arr[2]=30 → FOUND!
// Return 2

// Execution example: Find 25 in [10, 20, 30, 40, 50]
// Iteration 1: left=0, right=4, mid=2, arr[2]=30 > 25, right=1
// Iteration 2: left=0, right=1, mid=0, arr[0]=10 < 25, left=1
// Iteration 3: left=1, right=1, mid=1, arr[1]=20 < 25, left=2
// Iteration 4: left=2, right=1 → left > right → NOT FOUND
// Return -1

console.log(binarySearch([10, 20, 30, 40, 50], 30)); // 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1
```

---

### 3. Two Pointers - O(n)
```javascript
/**
 * Two Pointers - Start from opposite ends, move toward center
 * Time: O(n) - each element visited once
 * Space: O(1) - no extra space
 * 
 * MERN Usage: Finding pairs, matching operations
 * 
 * Real scenario: Finding two users with combined reputation
 * - Need users whose reputation sum equals target
 * - Sorted by reputation
 */
function twoPointerSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right]; // Found pair
    } else if (sum < target) {
      left++; // Need larger sum, move left pointer right
    } else {
      right--; // Need smaller sum, move right pointer left
    }
  }
  
  return [-1, -1]; // No pair found
}

// Execution example: Find pair that sums to 9 in [2, 7, 11, 15]
// Initial: left=0(2), right=3(15), sum=17 > 9, right--
// Iteration 1: left=0(2), right=2(11), sum=13 > 9, right--
// Iteration 2: left=0(2), right=1(7), sum=9 == 9 → FOUND!
// Return [0, 1]

console.log(twoPointerSearch([2, 7, 11, 15], 9)); // [0, 1]
```

---

## Part 3: Practical MERN Implementations

### 1. Deduplication Using Hash Map - O(n)
```javascript
/**
 * Remove duplicates efficiently using hash map
 * Time: O(n) - single pass with O(1) lookups
 * Space: O(n) - storing unique items
 * 
 * MERN Usage: Avoiding duplicate notifications, posts, etc.
 * 
 * Real scenario: User follows multiple accounts that repost
 * - Same item appears in feed multiple times
 * - Remove duplicates while maintaining order
 */
function removeDuplicates(items, keyFn) {
  const seen = new Map(); // Maps key to first occurrence
  const result = [];
  
  for (let i = 0; i < items.length; i++) {
    const key = keyFn(items[i]);
    
    if (!seen.has(key)) {
      // First time seeing this item
      seen.set(key, true);
      result.push(items[i]);
    }
    // If already seen, skip it
  }
  
  return result;
}

// MERN Example: Remove duplicate feed items
const feedItems = [
  { id: 1, content: "Post A" },
  { id: 2, content: "Post B" },
  { id: 1, content: "Post A" }, // Duplicate
  { id: 3, content: "Post C" },
  { id: 2, content: "Post B" }, // Duplicate
];

const uniqueFeed = removeDuplicates(feedItems, item => item.id);
console.log(uniqueFeed);
// Output: [
//   { id: 1, content: "Post A" },
//   { id: 2, content: "Post B" },
//   { id: 3, content: "Post C" }
// ]

// Complexity comparison:
// ❌ Using indexOf: O(n²)
//   for each item, search if already in result
// ✅ Using Map: O(n)
//   each item checked once with O(1) lookup
```

---

### 2. Grouping Data Using Hash Map - O(n)
```javascript
/**
 * Group items by property efficiently
 * Time: O(n) - single pass
 * Space: O(n) - storing all items in groups
 * 
 * MERN Usage: Grouping users by country, posts by category, etc.
 * 
 * Real scenario: Grouping products by category
 * - Need to display all products in each category
 * - Look up category should be O(1)
 */
function groupBy(items, keyFn) {
  const groups = new Map();
  
  for (const item of items) {
    const key = keyFn(item);
    
    if (!groups.has(key)) {
      groups.set(key, []); // Create new group
    }
    
    groups.get(key).push(item);
  }
  
  return groups;
}

// MERN Example: Group users by country
const users = [
  { name: "Alice", country: "USA" },
  { name: "Bob", country: "UK" },
  { name: "Charlie", country: "USA" },
  { name: "Diana", country: "Canada" },
];

const usersByCountry = groupBy(users, user => user.country);
console.log(usersByCountry);
// Map {
//   'USA' => [
//     { name: "Alice", country: "USA" },
//     { name: "Charlie", country: "USA" }
//   ],
//   'UK' => [
//     { name: "Bob", country: "UK" }
//   ],
//   'Canada' => [
//     { name: "Diana", country: "Canada" }
//   ]
// }

// Usage: Get all USA users in O(1)
const usaUsers = usersByCountry.get('USA');

// Complexity comparison:
// ❌ Using nested loop: O(n × m) where m = number of unique countries
// ✅ Using Map: O(n) grouping + O(1) lookup
```

---

### 3. Finding Top K Elements Using Sorting - O(n log n)
```javascript
/**
 * Find top K elements using sorting
 * Time: O(n log n) - sorting + selecting first K
 * Space: O(n) - for sorted array
 * 
 * MERN Usage: Trending posts, top products, etc.
 * 
 * Real scenario: Top 10 trending videos
 * - Simple approach: sort all, take first 10
 * - Better approach: use heap for just top K (later)
 */
function topK(items, k, compareFn) {
  // Sort all items using our quickSort
  const sorted = quickSort([...items], 0, items.length - 1, compareFn);
  
  // Return first K
  return sorted.slice(0, k);
}

function quickSort(arr, low, high, compareFn) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high, compareFn);
    quickSort(arr, low, pivotIdx - 1, compareFn);
    quickSort(arr, pivotIdx + 1, high, compareFn);
  }
  return arr;
}

function partition(arr, low, high, compareFn) {
  const randomIdx = low + Math.floor(Math.random() * (high - low + 1));
  [arr[randomIdx], arr[high]] = [arr[high], arr[randomIdx]];
  
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (compareFn(arr[j], pivot) > 0) { // Greater than pivot
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// MERN Example: Top 5 trending products
const products = [
  { name: "Product A", views: 5000 },
  { name: "Product B", views: 12000 },
  { name: "Product C", views: 8000 },
  { name: "Product D", views: 15000 },
  { name: "Product E", views: 3000 },
];

const top5 = topK(products, 5, (a, b) => a.views - b.views);
console.log(top5);
// Returns products sorted by views (highest first)

// Complexity at scale:
// 1M products, top 100
// - Sort all: O(1M log 1M) = 20M operations = 200ms
// - With heap (better): O(1M log 100) = ~2M operations = 20ms
```

---

### 4. Pagination Pattern - O(log n) for indexed DB query
```javascript
/**
 * Efficient pagination in MERN
 * Time: O(log n) - database index lookup
 * Space: O(1) - fetch fixed amount per page
 * 
 * MERN Usage: Loading user feeds, product lists, etc.
 * 
 * Real scenario: Load products page by page
 * - Wrong way: load all, slice in Node.js
 * - Right way: database limit/skip with index
 */

// ❌ WRONG: Load all products into memory
async function getAllProducts() {
  const allProducts = await Product.find({}); // Loads all 1M!
  return allProducts;
}

// ✅ RIGHT: Paginate using database
async function getProductsPage(pageNumber = 1, pageSize = 20) {
  const skip = (pageNumber - 1) * pageSize;
  
  // Database uses index, only fetches needed items
  const products = await Product.find({})
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(skip);
  
  return products;
}

// Even better: Cursor-based pagination (for real-time data)
async function getProductsAfter(lastId, pageSize = 20) {
  // Get products created after lastId
  const products = await Product.find({
    _id: { $gt: lastId }
  })
    .sort({ _id: 1 })
    .limit(pageSize);
  
  return products;
}

// Why cursor-based is better:
// - Offset-based: skip K items = O(K) even with index
// - Cursor-based: find after ID = O(log n) always
// - Offset fails when new items added during pagination
// - Cursor handles real-time additions correctly
```

---

## Quick Reference: When to Use What

```
SORTING:
- < 50 items, unsorted: Insertion sort O(n²) acceptable
- 100-10k items: Quicksort (fast average case)
- 10k+ items: Merge sort (guaranteed O(n log n))
- Need stable sort: Merge sort

SEARCHING:
- Unordered data: Linear search O(n)
- Sorted data: Binary search O(log n)
- Need fast lookup: Hash map O(1)
- Database queries: Use indexes (B-tree = binary search internally)

DEDUPLICATION:
- Small list: Simple loop acceptable
- Large list: Hash map O(n) instead of O(n²)

GROUPING:
- Always use hash map O(n)
- Avoid nested loops O(n × m)

TOP K:
- Small K, large N: Use sorting O(n log n)
- Large K: Use heap O(n log K)
```

---

**Remember:** These aren't just algorithms. They're patterns for building systems at scale. Every choice impacts your MERN app's performance. 🚀
