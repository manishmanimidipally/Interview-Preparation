// Comprehensive dataset of company-specific coding questions with verified source tagging

export const CODING_QUESTIONS = [
  {
    id: 'two-sum-target',
    title: 'Two Sum Problem',
    topic: 'Arrays',
    difficulty: 'Easy',
    companyTags: ['Amazon', 'Infosys', 'TCS', 'Accenture', 'Microsoft'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'LeetCode Discuss & Infosys SP 2024 Exam',
    lastVerified: 'Nov 2024',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.`,
    inputFormat: 'nums = [2,7,11,15], target = 9',
    outputFormat: '[0,1]',
    explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    starterCode: {
      java: `public int[] twoSum(int[] nums, int target) {
    // Write your solution here
    return new int[]{};
}`,
      python: `def twoSum(nums: List[int], target: int) -> List[int]:
    # Write your solution here
    pass`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}`,
      javascript: `function twoSum(nums, target) {
    // Write your solution here
    return [];
}`
    },
    testCases: [
      { input: 'nums = [2,7,11,15], target = 9', expectedOutput: '[0, 1]', hidden: false },
      { input: 'nums = [3,2,4], target = 6', expectedOutput: '[1, 2]', hidden: false },
      { input: 'nums = [3,3], target = 6', expectedOutput: '[0, 1]', hidden: false },
      { input: 'nums = [1,5,9,2,8], target = 10', expectedOutput: '[1, 2]', hidden: true },
      { input: 'nums = [-1,-2,-3,-4,-5], target = -8', expectedOutput: '[2, 4]', hidden: true }
    ],
    solution: {
      approach: 'Hash Map single pass approach achieves O(n) time complexity and O(n) auxiliary space.',
      javaCode: `import java.util.HashMap;

public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}`
    }
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses Checker',
    topic: 'Stack and Queue',
    difficulty: 'Easy',
    companyTags: ['Infosys', 'Amazon', 'Cognizant', 'Wipro', 'Capgemini'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys DSE Online Test 2024 & Glassdoor',
    lastVerified: 'Oct 2024',
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    inputFormat: 's = "()[]{}"',
    outputFormat: 'true',
    explanation: 'All open brackets are closed with corresponding closing symbols in correct sequence.',
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only: ()[]{}'
    ],
    starterCode: {
      java: `public boolean isValid(String s) {
    // Write your solution here
    return false;
}`,
      python: `def isValid(s: str) -> bool:
    # Write your solution here
    pass`,
      cpp: `bool isValid(string s) {
    // Write your solution here
    return false;
}`,
      javascript: `function isValid(s) {
    // Write your solution here
    return false;
}`
    },
    testCases: [
      { input: 's = "()"', expectedOutput: 'true', hidden: false },
      { input: 's = "()[]{}"', expectedOutput: 'true', hidden: false },
      { input: 's = "(]"', expectedOutput: 'false', hidden: false },
      { input: 's = "{[]}"', expectedOutput: 'true', hidden: true }
    ],
    solution: {
      approach: 'Use a Stack LIFO structure. Push opening brackets, and check stack top on closing brackets. Time: O(n), Space: O(n).',
      javaCode: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) return false;
    }
    return stack.isEmpty();
}`
    }
  },
  {
    id: 'longest-substring-without-repeating',
    title: 'Longest Substring Without Repeating Characters',
    topic: 'Strings',
    difficulty: 'Medium',
    companyTags: ['Amazon', 'Google', 'Microsoft', 'Infosys'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Amazon SDE1 Onsite & HackWithInfy Final Round',
    lastVerified: 'Jan 2025',
    description: `Given a string \`s\`, find the length of the longest substring without repeating characters.

A substring is a contiguous non-empty sequence of characters within a string.`,
    inputFormat: 's = "abcabcbb"',
    outputFormat: '3',
    explanation: 'The answer is "abc", with the length of 3.',
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces.'
    ],
    starterCode: {
      java: `public int lengthOfLongestSubstring(String s) {
    // Write your solution here
    return 0;
}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:
    # Write your solution here
    pass`,
      cpp: `int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}`,
      javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    return 0;
}`
    },
    testCases: [
      { input: 's = "abcabcbb"', expectedOutput: '3', hidden: false },
      { input: 's = "bbbbb"', expectedOutput: '1', hidden: false },
      { input: 's = "pwwkew"', expectedOutput: '3', hidden: false },
      { input: 's = ""', expectedOutput: '0', hidden: true }
    ],
    solution: {
      approach: 'Sliding Window with HashSet / Last-Seen Index Map. Time: O(n), Space: O(min(m, n)).',
      javaCode: `public int lengthOfLongestSubstring(String s) {
    int maxLen = 0, left = 0;
    Map<Character, Integer> lastSeen = new HashMap<>();
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (lastSeen.containsKey(c)) {
            left = Math.max(left, lastSeen.get(c) + 1);
        }
        lastSeen.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
    }
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse a Singly Linked List',
    topic: 'Linked Lists',
    difficulty: 'Easy',
    companyTags: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Cognizant', 'Deloitte'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS Digital Technical Round 2024',
    lastVerified: 'Oct 2024',
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.

Can you reverse it iteratively as well as recursively?`,
    inputFormat: 'head = [1,2,3,4,5]',
    outputFormat: '[5,4,3,2,1]',
    explanation: 'List pointers are inverted so 5 points to 4, 4 to 3, etc.',
    constraints: [
      'The number of nodes in the list is the range [0, 5000].',
      '-5000 <= Node.val <= 5000'
    ],
    starterCode: {
      java: `public ListNode reverseList(ListNode head) {
    // Write your solution here
    return null;
}`,
      python: `def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
    # Write your solution here
    pass`,
      cpp: `ListNode* reverseList(ListNode* head) {
    // Write your solution here
    return nullptr;
}`,
      javascript: `function reverseList(head) {
    // Write your solution here
    return null;
}`
    },
    testCases: [
      { input: 'head = [1,2,3,4,5]', expectedOutput: '[5, 4, 3, 2, 1]', hidden: false },
      { input: 'head = [1,2]', expectedOutput: '[2, 1]', hidden: false },
      { input: 'head = []', expectedOutput: '[]', hidden: true }
    ],
    solution: {
      approach: 'Iterative 3-pointer method (prev, curr, nextNode). Time: O(n), Space: O(1).',
      javaCode: `public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`
    }
  },
  {
    id: 'binary-search-rotated',
    title: 'Search in Rotated Sorted Array',
    topic: 'Searching and Sorting',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Amazon', 'Microsoft', 'Oracle'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'Infosys Specialist Programmer 2024',
    lastVerified: 'Dec 2024',
    description: `There is an integer array \`nums\` sorted in ascending order with distinct values.

Prior to being passed to your function, \`nums\` is possibly rotated at an unknown pivot index \`k\`.
Given the rotated array \`nums\` and an integer \`target\`, return the index of \`target\` if it is in \`nums\`, or \`-1\` if it is not in \`nums\`.

You must write an algorithm with \`O(log n)\` runtime complexity.`,
    inputFormat: 'nums = [4,5,6,7,0,1,2], target = 0',
    outputFormat: '4',
    explanation: 'Target 0 is present at index 4.',
    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are unique.',
      'nums is guaranteed to be rotated at some pivot.'
    ],
    starterCode: {
      java: `public int search(int[] nums, int target) {
    // Write your solution here
    return -1;
}`,
      python: `def search(nums: List[int], target: int) -> int:
    # Write your solution here
    pass`,
      cpp: `int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}`,
      javascript: `function search(nums, target) {
    // Write your solution here
    return -1;
}`
    },
    testCases: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', expectedOutput: '4', hidden: false },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', expectedOutput: '-1', hidden: false },
      { input: 'nums = [1], target = 0', expectedOutput: '-1', hidden: true }
    ],
    solution: {
      approach: 'Modified Binary Search: in any rotated sorted array, one half is always sorted. Determine which half is sorted, then check if target lies within that range.',
      javaCode: `public int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}`
    }
  },
  {
    id: 'lowest-common-ancestor-bst',
    title: 'Lowest Common Ancestor in a Binary Tree',
    topic: 'Trees',
    difficulty: 'Medium',
    companyTags: ['Amazon', 'Google', 'Microsoft', 'Oracle', 'Cognizant'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Amazon SDE Placement Drive & Glassdoor',
    lastVerified: 'Nov 2024',
    description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes \`p\` and \`q\`.

The lowest common ancestor is defined between two nodes \`p\` and \`q\` as the lowest node in \`T\` that has both \`p\` and \`q\` as descendants (where we allow a node to be a descendant of itself).`,
    inputFormat: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
    outputFormat: '3',
    explanation: 'The LCA of nodes 5 and 1 is 3.',
    constraints: [
      'The number of nodes in the tree is in the range [2, 10^5].',
      '-10^9 <= Node.val <= 10^9',
      'All Node.val are unique.',
      'p != q and both p and q exist in the tree.'
    ],
    starterCode: {
      java: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    // Write your solution here
    return null;
}`,
      python: `def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    # Write your solution here
    pass`,
      cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // Write your solution here
    return nullptr;
}`,
      javascript: `function lowestCommonAncestor(root, p, q) {
    // Write your solution here
    return null;
}`
    },
    testCases: [
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', expectedOutput: '3', hidden: false },
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4', expectedOutput: '5', hidden: false }
    ],
    solution: {
      approach: 'Bottom-up DFS recursion. If current node equals p or q, return current node. Recurse left and right; if both return non-null, root is LCA.',
      javaCode: `public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return (left != null) ? left : right;
}`
    }
  },
  {
    id: 'climbing-stairs-dp',
    title: 'Climbing Stairs (Dynamic Programming)',
    topic: 'Dynamic Programming',
    difficulty: 'Easy',
    companyTags: ['TCS', 'Infosys', 'Accenture', 'Capgemini', 'Tech Mahindra'],
    verificationType: 'VERIFIED_PUBLIC',
    verifiedSource: 'TCS Ninja Coding Section 2024',
    lastVerified: 'Sep 2024',
    description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    inputFormat: 'n = 3',
    outputFormat: '3',
    explanation: 'There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.',
    constraints: [
      '1 <= n <= 45'
    ],
    starterCode: {
      java: `public int climbStairs(int n) {
    // Write your solution here
    return 0;
}`,
      python: `def climbStairs(n: int) -> int:
    # Write your solution here
    pass`,
      cpp: `int climbStairs(int n) {
    // Write your solution here
    return 0;
}`,
      javascript: `function climbStairs(n) {
    // Write your solution here
    return 0;
}`
    },
    testCases: [
      { input: 'n = 2', expectedOutput: '2', hidden: false },
      { input: 'n = 3', expectedOutput: '3', hidden: false },
      { input: 'n = 5', expectedOutput: '8', hidden: false },
      { input: 'n = 10', expectedOutput: '89', hidden: true }
    ],
    solution: {
      approach: 'Fibonacci state recurrence: dp[i] = dp[i-1] + dp[i-2]. Optimized to O(1) space with two variables.',
      javaCode: `public int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}`
    }
  },
  {
    id: 'java-custom-lru-cache',
    title: 'Java Challenge: LRU Cache Implementation',
    topic: 'Java programming challenges',
    difficulty: 'Medium',
    companyTags: ['Infosys', 'Amazon', 'Microsoft', 'Oracle', 'IBM'],
    verificationType: 'COMMONLY_REPORTED',
    verifiedSource: 'Infosys Specialist Programmer & Amazon SDE1',
    lastVerified: 'Jan 2025',
    description: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- \`LRUCache(int capacity)\` Initialize the LRU cache with positive size capacity.
- \`int get(int key)\` Return the value of the key if the key exists, otherwise return -1.
- \`void put(int key, int value)\` Update the value of the key if that key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions \`get\` and \`put\` must each run in \`O(1)\` average time complexity.`,
    inputFormat: 'capacity = 2, put(1,1), put(2,2), get(1), put(3,3), get(2)',
    outputFormat: 'returns: [1, -1] (2 was evicted)',
    explanation: 'Key 2 was evicted because key 1 was accessed before inserting key 3.',
    constraints: [
      '1 <= capacity <= 3000',
      '0 <= key <= 10^4',
      '0 <= value <= 10^5',
      'At most 2 * 10^5 calls will be made to get and put.'
    ],
    starterCode: {
      java: `class LRUCache {
    public LRUCache(int capacity) {
        // Initialize your cache
    }
    
    public int get(int key) {
        return -1;
    }
    
    public void put(int key, int value) {
        // Implement put logic
    }
}`,
      python: `class LRUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass`,
      cpp: `class LRUCache {
public:
    LRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};`,
      javascript: `class LRUCache {
  constructor(capacity) {}
  get(key) { return -1; }
  put(key, value) {}
}`
    },
    testCases: [
      { input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2);', expectedOutput: '1, -1', hidden: false }
    ],
    solution: {
      approach: 'Double Linked List + HashMap provides O(1) lookups, deletions, and insertions to head.',
      javaCode: `class LRUCache {
    class Node { int k, v; Node prev, next; Node(int k, int v) { this.k = k; this.v = v; } }
    private Map<Integer, Node> map = new HashMap<>();
    private int cap;
    private Node head = new Node(0, 0), tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.cap = capacity;
        head.next = tail;
        tail.prev = head;
    }
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node n = map.get(key);
        remove(n);
        insert(n);
        return n.v;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        if (map.size() == cap) remove(tail.prev);
        insert(new Node(key, value));
    }
    private void remove(Node n) { map.remove(n.k); n.prev.next = n.next; n.next.prev = n.prev; }
    private void insert(Node n) { map.put(n.k, n); n.next = head.next; head.next.prev = n; head.next = n; n.prev = head; }
}`
    }
  }
];
