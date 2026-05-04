# MERN DSA Quick Reference - Keep This Open While Coding

## Part 1: DSA to MERN Ecosystem Mapping

### Sorting Algorithms

#### Bubble Sort - O(n²) - AVOID in production
```
When might you use this?
- Teaching purposes only
- Tiny datasets (< 50 items)

MERN Ecosystem: NEVER
- Your user feed has 1M items? DON'T use this
- Takes 10^12 operations at scale

Where it appears:
- Educational algorithms
- Interview question (to show you can optimize)
```

#### Selection Sort - O(n²) - AVOID in production
```
Similar to bubble sort
- Fewer swaps, but still O(n²)
- Marginally better for small datasets

MERN Example: Small dropdown lists
- You have 30 categories to sort
- User sees instant response
- Don't premature-optimize this
```

#### Insertion Sort - O(n²) average, O(n) best case
```
Best for: Nearly sorted data, small datasets

MERN Ecosystem:
- Adding new products to a sorted list
- Already mostly sorted = O(n) performance
- Great for real-time updates (one item at a time)

Real Example: User adds a photo to album
- Album is sorted by date
- New photo goes at end
- Just one insertion = O(n) not O(n²)
```

#### Merge Sort - O(n log n) guaranteed
```
Best for: Guaranteeing performance, external sorting

MERN Ecosystem:
- Sorting 1M user profiles: 20M operations
- Stable sort (important for ties)
- Extra memory needed

Real Example: Sorting products by rating, then price
- Merge sort is stable = maintains original order for ties
- Users expect consistent results
- Works on distributed datasets
```

#### Quick Sort - O(n log n) average, O(n²) worst
```
Best for: In-place sorting, most practical

MERN Ecosystem:
- Default choice for most scenarios
- Fast in practice (good cache performance)
- Worst case rare with random pivot

Real Example: Sorting 1M user posts
- Choose random pivot = avoid worst case
- In-place = don't double memory
- Fast in practice
```

#### Heap Sort - O(n log n) guaranteed
```
Best for: Guaranteed performance, but slower in practice

MERN Ecosystem:
- When you MUST have O(n log n)
- Finding top K items efficiently

Real Example: Top 10 trending videos
- Build heap: O(n)
- Extract top 10: O(10 log n)
- Total: O(n + k log n) where k=10
```

---

### Searching Algorithms

#### Linear Search - O(n)
```
Code pattern WITHOUT built-ins:
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

MERN Ecosystem: Finding by non-indexed property
- Small datasets (< 1000)
- No index available
- One-time search
```

#### Binary Search - O(log n)
```
Requirement: Data must be SORTED

Code pattern WITHOUT built-ins:
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

Complexity comparison:
- Linear: 1M items = 1M checks (worst case)
- Binary: 1M items = 20 checks (worst case)

MERN Ecosystem: 
- MongoDB indexed queries (essentially binary search in B-tree)
- Autocomplete (search in trie + binary search)
- Versioned data lookup
```

#### Two Pointers - O(n)
```
Pattern: Start from opposite ends

Code example:
function findPair(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}

MERN Ecosystem:
- Finding matching pairs of items
- Container with most water (UI layout)
- Trapping rain water (data visualization)
```

#### Hash Table Lookup - O(1) average
```
Mental model: Key -> Index calculation -> Value

MERN Ecosystem:
- MongoDB indexing strategy
- Redux state shape (object vs array)
- Session/token lookup
- Deduplication (Set)

Real example:
const userMap = new Map();
userMap.set('user_123', userData); // O(1) insert
userMap.get('user_123'); // O(1) lookup
```

---

## Part 2: Data Structure Choices for MERN

### Arrays
```
Time Complexity:
- Access by index: O(1)
- Insert at end: O(1)
- Insert at position: O(n)
- Delete at position: O(n)
- Search: O(n)

MERN Usage:
✅ Storing ordered lists (feed, products)
✅ Random access by index
❌ Frequent insertions/deletions in middle
❌ Searching by property (use hash map instead)
```

### Linked Lists
```
Time Complexity:
- Access by index: O(n)
- Insert at front: O(1)
- Insert at position: O(n)
- Delete at front: O(1)
- Search: O(n)

MERN Usage:
❌ Almost never use in JavaScript MERN
   (Arrays are better for our use cases)
✅ Teaching data structure concepts
✅ Building custom queue/stack
```

### Hash Maps / Objects
```
Time Complexity (average):
- Insert: O(1)
- Delete: O(1)
- Lookup: O(1)
- Keys iteration: O(n)

MERN Usage:
✅ Redux state shape
✅ User lookups by ID
✅ Caching query results
✅ Deduplication
✅ Grouping data

Real example:
// Group users by country
const usersByCountry = {};
users.forEach(user => {
  if (!usersByCountry[user.country]) {
    usersByCountry[user.country] = [];
  }
  usersByCountry[user.country].push(user);
});
// Now country lookup is O(1) instead of O(n)
```

### Sets
```
Time Complexity:
- Insert: O(1)
- Delete: O(1)
- Lookup: O(1)

MERN Usage:
✅ Deduplication (unique items)
✅ Membership checking
✅ Finding intersection/union of collections
✅ Avoiding duplicate notifications

Example:
const sentNotifications = new Set();
for (let userId of userIds) {
  if (!sentNotifications.has(userId)) {
    sendNotification(userId);
    sentNotifications.add(userId);
  }
}
```

### Trees (Binary Search Tree, Balanced Trees)
```
Time Complexity (balanced):
- Search: O(log n)
- Insert: O(log n)
- Delete: O(log n)

MERN Usage:
✅ MongoDB uses B-tree for indexing
✅ DOM tree in React (virtual DOM)
✅ File system structure
❌ Rarely implement in JavaScript (use data in MongoDB)

Connection to MERN:
- MongoDB index = B-tree under the hood
- React reconciliation = tree comparison algorithm
- When you query: db.collection.find({email: "..."})
  MongoDB searches a B-tree index in O(log n)
```

### Heaps (Min-Heap, Max-Heap)
```
Time Complexity:
- Insert: O(log n)
- Extract min/max: O(log n)
- Build: O(n)

MERN Usage:
✅ Priority queues (task processing)
✅ Finding top K items (trending)
✅ Merge sorted streams
✅ Median finding in streaming data

Real example: Top 10 trending posts
// Instead of sorting all 1M posts
// Extract top 10 from heap = O(10 log n)
```

---

## Part 3: Complexity Analysis Checklist

### Always Ask These Questions

#### Time Complexity
```
□ Worst case: What's the maximum operations needed?
□ Average case: Most common scenario?
□ Best case: Minimum operations (when happens)?
□ At scale: 1M, 1B, 1T items - still acceptable?
□ Real time: Milliseconds needed for user experience?

Example calculation:
Algorithm: O(n log n)
Input size: 1M items
Log2(1M) ≈ 20
Total operations: 1M × 20 = 20M operations
At 1M ops/sec (reasonable estimate): 20ms ✅
```

#### Space Complexity
```
□ Temporary storage: How much memory during execution?
□ Output storage: How much for result?
□ Scalability: At 1M items, how much RAM?
□ Cache efficiency: Does it use CPU cache well?

Real example:
Merge sort uses O(n) extra space
1M items × 8 bytes per pointer = 8MB
Acceptable for modern systems ✅
```

#### Network Complexity (MERN specific)
```
□ API calls needed: How many round trips?
□ Data transferred: Bytes over network?
□ Concurrent requests: Can we parallelize?
□ Database queries: N+1 problem?

Example problem:
❌ For each product, query its reviews = N+1
   If 100 products, 101 queries
✅ Fetch all reviews once, group by productId
   Only 2 queries total
```

---

## Part 4: Common MERN Performance Patterns

### Pattern 1: Pagination (Avoid Loading All Data)
```javascript
// ❌ BAD: Fetches all 1M users into memory
const users = await User.find({});
const sorted = users.sort((a,b) => b.createdAt - a.createdAt);
const page1 = sorted.slice(0, 20);

// ✅ GOOD: Database does sorting and pagination
const users = await User.find({})
  .sort({ createdAt: -1 })
  .limit(20)
  .skip(0);

Complexity improvement:
❌ BAD: O(n) memory, O(n log n) sort time
✅ GOOD: O(1) memory, index lookup O(log n)
```

### Pattern 2: Database Indexing (Avoid Linear Search)
```javascript
// ❌ BAD: Linear scan of all documents
db.users.find({ email: "user@example.com" });
// Scans all 10M documents until found

// ✅ GOOD: With index
db.users.createIndex({ email: 1 });
db.users.find({ email: "user@example.com" });
// B-tree lookup in 20 operations instead of 10M

Complexity improvement:
❌ BAD: O(n) scan
✅ GOOD: O(log n) lookup
```

### Pattern 3: Caching (Avoid Recalculation)
```javascript
// ❌ BAD: Recalculate trending posts every request
app.get('/api/trending', async (req, res) => {
  const allPosts = await Post.find({});
  const sorted = allPosts.sort((a,b) => b.likes - a.likes);
  res.json(sorted.slice(0, 10));
}); // Response time: 2-3 seconds

// ✅ GOOD: Cache trending posts
const cache = { trending: null, updatedAt: null };

app.get('/api/trending', async (req, res) => {
  if (Date.now() - cache.updatedAt < 60000) {
    return res.json(cache.trending);
  }
  const trending = await Post.find({})
    .sort({ likes: -1 })
    .limit(10);
  cache.trending = trending;
  cache.updatedAt = Date.now();
  res.json(trending);
}); // Response time: 5ms (cached)

Complexity improvement:
❌ BAD: O(n log n) every request = 1000+ requests/sec max
✅ GOOD: O(n log n) once per minute = 10,000+ requests/sec possible
```

### Pattern 4: Deduplication (Avoid Duplicates)
```javascript
// ❌ BAD: Linear search for duplicates
function removeDuplicates(items) {
  const result = [];
  items.forEach(item => {
    if (!result.includes(item)) { // O(n) check each time
      result.push(item);
    }
  });
  return result;
} // Total: O(n²)

// ✅ GOOD: Set for O(1) lookup
function removeDuplicates(items) {
  return Array.from(new Set(items));
} // Total: O(n)

Complexity improvement:
❌ BAD: 1M items = 1T operations
✅ GOOD: 1M items = 1M operations
```

### Pattern 5: Batch Operations (Avoid Multiple Queries)
```javascript
// ❌ BAD: N+1 queries
const users = await User.find({ role: 'admin' }); // 1000 admins
for (let user of users) {
  const permissions = await Permission.find({ userId: user._id });
  user.permissions = permissions;
}
// Total: 1 + 1000 = 1001 database queries

// ✅ GOOD: Batch in one query
const users = await User.find({ role: 'admin' });
const userIds = users.map(u => u._id);
const permissions = await Permission.find({ userId: { $in: userIds } });
const permMap = {};
permissions.forEach(p => {
  if (!permMap[p.userId]) permMap[p.userId] = [];
  permMap[p.userId].push(p);
});
users.forEach(u => u.permissions = permMap[u._id] || []);
// Total: 2 database queries

Complexity improvement:
❌ BAD: 1001 queries × 10ms = 10 seconds
✅ GOOD: 2 queries × 10ms = 20ms
```

---

## Part 5: Interview-Style Problems You Should Know

### Easy
- [ ] Two Sum (hash map)
- [ ] Valid Palindrome (two pointers)
- [ ] Binary Search (divide & conquer)
- [ ] Merge Sorted Array (two pointers)
- [ ] Remove Duplicates from Sorted Array (two pointers)

**MERN Connection:** Product filtering, user deduplication, search features

### Medium
- [ ] 3Sum (sorting + two pointers)
- [ ] Longest Substring Without Repeating (sliding window)
- [ ] Top K Frequent Elements (heap/sort)
- [ ] Merge K Sorted Lists (heap/merge)
- [ ] LRU Cache (hash map + linked list)

**MERN Connection:** Feed ranking, autocomplete, caching strategies

### Hard
- [ ] Median of Two Sorted Arrays (binary search)
- [ ] Sliding Window Maximum (deque)
- [ ] Trapping Rain Water (dynamic programming)
- [ ] Reverse Polish Notation (stack)
- [ ] Design In-Memory File System (tree + hash map)

**MERN Connection:** Advanced MongoDB queries, real-time streaming, system design

---

## Part 6: Daily Optimization Checklist

When your MERN app is slow, ask in order:

```
1. Database Issue? (Most common - 60%)
   □ Is query indexed?
   □ Are you fetching unnecessary fields?
   □ N+1 query problem?
   □ Try: db.collection.explain() to see execution plan

2. Algorithm Issue? (20%)
   □ Are you sorting unnecessarily?
   □ Any nested loops you could optimize?
   □ Using right data structure?
   □ Try: Add logging, count operations

3. Network Issue? (10%)
   □ How much data over network?
   □ Can you paginate instead?
   □ Can you compress?
   □ Try: DevTools Network tab

4. Frontend Issue? (10%)
   □ Rendering 1M items?
   □ Expensive re-renders?
   □ Missing React.memo()?
   □ Try: React DevTools Profiler

5. Infrastructure Issue? (Edge cases)
   □ Server CPU maxed?
   □ RAM available?
   □ Network bandwidth?
   □ Try: Check cloud provider dashboard
```

---

## Part 7: Questions to Ask Your AI Mentor

### When Learning a New Algorithm
```
"I'm learning [algorithm].
1. Show me the step-by-step execution on [specific data]
2. What would I use this for in MERN?
3. How does it compare to alternatives?
4. What are common mistakes?"
```

### When Optimizing Code
```
"My query is slow: [show code]
1. What's the complexity?
2. Where should I optimize (DB/Node/Frontend)?
3. What's the best approach?
4. How much improvement can I expect?"
```

### When Doing Code Review
```
"Should I approve this PR? [show code]
1. Is this production-ready?
2. What fails at scale?
3. How would Google engineer this?
4. What's the mentor feedback?"
```

### When Designing a Feature
```
"I need to build [feature].
1. What data structures make sense?
2. What algorithms would I use?
3. What's the complexity at scale?
4. Show me pseudocode first?"
```

---

## Keep This Handy

**Bookmark this file and consult when:**
- Starting a new DSA problem
- Optimizing slow queries
- Doing code reviews
- Designing features
- Interviewing for jobs

**Update as you learn:**
- Add problems you struggled with
- Write your own MERN connections
- Track patterns that helped
- Note gotchas you encountered

---

**Remember:** DSA isn't about memorizing solutions. It's about building intuition for efficient systems. Every algorithm teaches you something about building software that scales. 🚀
