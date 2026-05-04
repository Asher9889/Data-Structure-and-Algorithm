# IDE Integration Guide - FAANG MERN DSA Mentor Setup

## Quick Setup for Different IDEs

### Option 1: VS Code + Continue Extension
**What:** Continue is an open-source copilot that uses system prompts

**Steps:**
1. Install Continue extension in VS Code
2. Open `.continue/config.json` in your workspace
3. Add this configuration:

```json
{
  "models": [
    {
      "title": "Claude 3.5 Sonnet",
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    }
  ],
  "systemPrompts": [
    {
      "name": "FAANG DSA Mentor",
      "role": "system",
      "content": "[PASTE THE FULL SYSTEM PROMPT HERE]"
    }
  ]
}
```

4. In Continue chat, type: `@FAANG DSA Mentor` before your question

**Trigger command:** `Cmd/Ctrl + L` → Select "FAANG DSA Mentor" from dropdown

---

### Option 2: Cursor IDE (Recommended for This Use Case)
**What:** Cursor has built-in .cursor/rules for AI behavior

**Steps:**
1. Create `.cursor/rules` file in your project root
2. Paste the system prompt content there
3. Cursor automatically uses this for all AI interactions in the project

**File path:**
```
your-mern-project/
├── .cursor/
│   └── rules
├── src/
└── package.json
```

**Usage:** Just chat with Cursor's AI panel (right sidebar), it auto-applies your rules

---

### Option 3: ChatGPT Custom Instructions (Workaround)
1. Go to Settings → Features → Custom Instructions
2. Add system prompt as your "Custom Instructions"
3. Enable for all chats
4. Use GPT-4 or better for DSA discussions

---

### Option 4: Ollama + Open Source Models (Local)
**What:** Run Claude-equivalent locally without API costs

**Steps:**
1. Install Ollama: https://ollama.ai
2. Run: `ollama run mistral` (or another code-focused model)
3. Create a `.ollama/system_prompt.txt` with the prompt
4. Use with VS Code Ollama extension

---

## Starter Prompts to Test Your Setup

Copy these into your IDE to test that the mentor persona is working:

### Test 1: Basic Algorithm Teaching
```
I want to sort this array: [64, 34, 25, 12, 22, 11, 90]

Teach me bubble sort WITHOUT using Array.sort().
Show me:
1. How it works internally (step by step)
2. A real MERN ecosystem problem where we'd use this
3. Why it fails at scale
4. How you'd solve it in production
```

**Expected Response:** 
- Implementation from scratch
- Detailed step-by-step walkthrough
- Real Netflix/Instagram example
- Time complexity analysis
- MongoDB or Node.js optimization suggestion

---

### Test 2: MERN Real-World Problem
```
We have a MongoDB collection with 1M product listings.
Each has: { _id, name, price, timestamp, rating }

Frontend needs to:
- Show products sorted by rating (highest first)
- Load 20 at a time (pagination)

Should we:
A) Fetch all from MongoDB, sort in Node.js?
B) Use MongoDB's sort() in aggregation?
C) Use Redis cache?

Teach me the DSA/System Design thinking here.
```

**Expected Response:**
- Complexity analysis of each approach
- Network payload considerations
- Eventual consistency issues
- Real production recommendation
- Code example without built-ins

---

### Test 3: Algorithm Trade-offs
```
I need to search for a user by email in MongoDB.
We have 10M users.

Linear search: O(n) - check each record
Hashing (index): O(1) - direct lookup

Explain:
1. How MongoDB indexing actually works (B-tree details)
2. Space-time tradeoff
3. Why you can't always use indexes
4. When O(n) is acceptable in MERN
```

**Expected Response:**
- Deep dive into data structure mechanics
- MongoDB internals
- Cache considerations
- Real-world scaling issues
- Code examples showing the concept

---

## Custom Variations of the Prompt

### For LeetCode Practice Mode
Add this section to the system prompt:
```
When discussing LeetCode-style problems:
- Still implement from scratch, no built-ins
- Always analyze both time and space complexity
- Provide 2-3 different approaches (brute force → optimized)
- Relate the problem to your current MERN project
- Suggest how it appears in real system design interviews
```

### For System Design Focus
```
When discussing system design:
- Always connect DSA to distributed systems
- Explain how algorithms change with multiple servers
- Discuss network latency, eventual consistency
- Show MongoDB/Redis/Node.js implications
- Suggest architectural patterns for scaling
```

### For Performance Optimization
```
When profiling performance issues:
- First, identify which algorithm is the bottleneck
- Show how to measure (Node.js profiler, DevTools)
- Explain the math of improvement
- Suggest whether to optimize here or at DB level
- Discuss premature optimization vs real gains
```

---

## Daily Practice Routine Using This Setup

### Morning: Algorithm Deep Dive (30 mins)
```
Pick an algorithm (selection sort, binary search, etc.)
Prompt:
"I'm starting with [algorithm name].
1. Teach me how it works from first principles
2. I'll implement it without built-ins
3. Show me execution on [specific data]
4. How does this appear in [MERN ecosystem task]?"
```

### Midday: Real Problem Solving (45 mins)
```
"I have this MERN problem: [describe your actual project issue]
- What's the algorithmic complexity?
- Where's the bottleneck?
- How would a FAANG engineer solve this?
- Show me the code approach."
```

### Evening: LeetCode or Mock Interview (30 mins)
```
"Let's do a medium-difficulty problem: [problem name/description]
- Think through it like a FAANG interview
- I'll code it, you review
- Teach me the optimal approach
- How would this appear in production?"
```

---

## Monitoring Your Progress

### Self-Assessment Questions (Ask Your IDE Mentor)
Use these to gauge your understanding:

**Week 1-2:**
```
"I just learned [algorithm]. 
How would I explain this to a junior developer at Google?
What would they ask me that I might not know?"
```

**Week 3-4:**
```
"In my current MERN project, where could I apply:
1. [Algorithm learned]
2. Better complexity analysis
3. Caching strategies

Show me the impact (milliseconds saved)."
```

**Week 5+:**
```
"I'm doing a code review for a junior.
They used [simple approach] for [problem].
It works but might not scale. Teach them the better way."
```

---

## Example IDE Workflow

### Scenario: You're Learning Quicksort

**Step 1: Ask for explanation**
```
"Teach me quicksort from scratch.
- How does partitioning work?
- Why is it faster than bubble sort?
- Show me a MERN problem where this matters."
```

**Step 2: Implement yourself**
(Write code in editor)

**Step 3: Ask for review**
```
"I implemented quicksort. 
- Is this production-ready code?
- What's missing for FAANG standards?
- How would this perform on 1M items?"
```

**Step 4: Apply to real problem**
```
"My MongoDB query returns 100k results.
They need sorting. Should I:
A) Use my quicksort implementation?
B) Use db.collection.sort()?
C) Something else?

Explain like I'll present this in a code review."
```

---

## Prompt Engineering Tips

### Make Your Questions Specific
❌ "Teach me sorting"
✅ "Teach me merge sort's merge step specifically. Show how two sorted arrays combine. Then explain how Meta would use this for feed ranking."

### Add Constraints
❌ "How do I search?"
✅ "I need to search 1M items. I can use max 100MB memory. O(log n) time needed. What's my approach?"

### Ask for Multiple Perspectives
"From a [Database/Frontend/System Design] perspective, what algorithm should I use?"

### Request Code Reviews
Paste your code and ask: "Is this production-ready? What would fail at scale?"

---

## Advanced: Create Your Own Rules

### Rule 1: Always Benchmark
```
"When you suggest an algorithm, also suggest:
- How to benchmark it in Node.js
- Expected milliseconds on 1M items
- Comparison with simpler approach"
```

### Rule 2: Always Consider Storage
```
"For every algorithm, mention:
- Memory needed on 1M items
- Disk I/O implications
- Cache efficiency"
```

### Rule 3: Always Show Trade-offs
```
"Compare:
- Speed vs simplicity
- Optimization vs readability
- Premature vs necessary optimization"
```

---

## Troubleshooting the Setup

### Issue: Mentor not using custom prompt
**Solution:** 
- Ensure system prompt is properly added to IDE config
- Restart IDE completely
- Check that it's selected in chat interface
- Use explicit mention: "As my FAANG mentor..."

### Issue: Mentor using built-in methods
**Solution:**
- In your prompt, be explicit: "NEVER use Array.sort()"
- Remind in your question: "Without using Array.sort()..."
- If it happens, correct: "Remember, no built-ins. Show me the mechanics."

### Issue: Responses too surface-level
**Solution:**
- Ask follow-ups: "Why?" and "At scale?"
- Request: "Explain like you're reviewing code at Google"
- Be specific: "Show 5 execution steps on this exact data"

### Issue: Not connecting to MERN
**Solution:**
- In questions, mention: "In my MERN stack..."
- Ask: "How does this relate to MongoDB/React/Node.js?"
- Provide context: "My app has X million users..."

---

## Integration with Your Git Workflow

### Commit Message Strategy
When you solve an algorithm problem:
```
git commit -m "feat: implement quicksort algorithm

- Implemented without Array.sort()
- O(n log n) average, handles 1M items in 50ms
- Usage: user feed sorting in MongoDB
- Tradeoff: O(n²) worst case, mitigated with random pivot

Related to: [LeetCode problem / MERN feature]"
```

### Code Comments Strategy
```javascript
// Quicksort - O(n log n) average, O(n²) worst
// Usage: Sorting 1M+ items efficiently
// MERN Context: Ranking user feeds by engagement
// Why not Array.sort()? Building algorithmic understanding for systems scale
function quickSort(arr) {
  // ... implementation
}
```

---

## Next Steps

1. **Pick Your IDE:** Continue (VS Code), Cursor, or ChatGPT
2. **Add the System Prompt** using the configuration above
3. **Start with Test Prompts** to verify setup
4. **Follow Daily Routine** for 4 weeks
5. **Track Your Learning** with assessment questions
6. **Apply to Your MERN Project** daily

---

## Success Indicators

After 4 weeks with this setup, you should:
- ✅ Understand algorithm mechanics deeply (not just "memorize this")
- ✅ Know when to use each algorithm (algorithmic thinking)
- ✅ Connect DSA to your MERN stack (practical relevance)
- ✅ Optimize your actual project bottlenecks (real impact)
- ✅ Explain tradeoffs like a senior engineer (communication)
- ✅ Code review peers' algorithms confidently (leadership)

**Your goal: From "memorizing algorithms" → "engineering intuition" 🚀**
