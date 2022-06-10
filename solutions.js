// primeTest

// function isPrime(num) {
//   let prime = true
//   let sq = Math.floor(Math.sqrt(num));
//   if (num <= 1) {
//     prime = false
//   } 
//   if (!Number.isInteger(num)) {
//     prime = false
//   } 
//   for (let i = 2; i < sq+1; i++) {
//     if (num % i === 0) {
//       prime = false
//     }
//   }
//   return prime;
// }

// valid parentheses 

// function validParentheses(parens) {
//   let stack = [];
//   let map = {
//     '(':')',
//     '[':']',
//     '{':'}'
//   };
//   for (let i=0; i<parens.length; i++) {
//     if (stack.length > 0 && map[stack[stack.length - 1]] === parens[i]) {
//       stack.pop();
//     } else {
//       stack.push(parens[i])
//     }
//   }
//   return stack.length === 0;
// };

// var romanToInt = function(s) {
//   let romanMap = new Map();
//   romanMap.set('I', 1)
//   romanMap.set('V', 5)
//   romanMap.set('X', 10)
//   romanMap.set('L', 50)
//   romanMap.set('C', 100)
//   romanMap.set('D', 500)
//   romanMap.set('M', 1000)
//   let num = romanMap.get(s[s.length-1]);
//   for(let i=s.length-2; i >= 0; i--) {
//     if (romanMap.get(s[i]) >= romanMap.get(s[i+1])) {
//       num += romanMap.get(s[i])
//     } else {
//       num -= romanMap.get(s[i])
//     }
//   }
//   return num;
// };

// var isPalindrome = function(head) {
//   function isPalindromeRecursive(recursiveHead) {
//     if (recursiveHead == null) {
//       return true;
//     }
//     const next = isPalindromeRecursive(recursiveHead.next)
//     const valid = recursiveHead.val === head.val;
//     head = head.next;
//     return next && valid
//   }
//   return isPalindromeRecursive(head)
// };

// var canConstruct = function(ransomNote, magazine) {
//   let constructable = true
//   for (let i=0; i < ransomNote.length; i++) {
//     if (magazine.indexOf(ransomNote.charAt(i)) >= 0) {
//       magazine = magazine.replace(ransomNote.charAt(i), '')
//     } else {
//       constructable = false;
//     }
//   }
//   return constructable;
// };

// var fizzBuzz = function(n) {
//   let output = []
//   for (let i=1; i<=n; i++) {
//     if (i % 3 === 0 && i % 5 ===0) {
//       output.push("FizzBuzz")
//     } else if (i % 3 === 0) {
//       output.push("Fizz")
//     } else if (i % 5 === 0) {
//       output.push("Buzz")
//     } else {
//       output.push(i.toString())
//     }
//   }
//   return output;
// };

// var middleNode = function(head) {
//   let fast = head
//   let slow = head
  
//   while (fast && fast.next) {
//     slow = slow.next
//     fast = fast.next.next
//   }
//   return slow;
// };

// var kWeakestRows = function(mat, k) {
//   let kWeakest = []
//   mat.forEach((arr, idx) => {
//     kWeakest.push([arr.reduce((sum, a) => sum + a, 0), idx])
//   })
//   kWeakest.sort(function(a, b) {
//     return a[0] - b[0]
//   })
//   return kWeakest.slice(0, k).map(arr => arr[1])
// };

// var numberOfSteps = function(num) {
//   let steps = 0
//   while (num > 0) {
//     console.log(num)
//     if (num % 2 == 0) {
//       num = num/2
//       steps++
//     } else {
//       num = num-1
//       steps++
//     }
//   }
//   return steps;
// };

// var maximumWealth = function(accounts) {
//   max=0
//   accounts.forEach(function(el) {
//     wealth=el.reduce((a, b) => a + b)
//     if(wealth>max) {
//       max=wealth
//     }
//   })
//   return max
// };

// O(n^2)

// var twoSum = function(nums, target) {
//   let result = []
//   for(let i=0; i<nums.length; i++) {
//     for(let j=i+1; j<nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         result.push(i, j)
//       }
//     }
//   }
//   return result;
// };

// O(n)

// var twoSum = (nums, target) => {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]
//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], i]
//     }
//     map[nums[i]] = i;
//   }
//   return null;
// }

// var isPalindrome = function(x) {
//   let arr = x.split('')
//   let reverse = arr.reverse()
//   return x.toString() === reverse.join('')
// };

// var longestCommonPrefix = function(strs) {
//   let i=0
//   while(strs[0][i] && strs.every(w => w[i] === strs[0][i])) i++;
//   return strs[0].substring(0, i);
// };

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var mergeTwoLists = function(l1, l2) {
// let dummyHead = new ListNode(0);
// let currentNode = dummyHead; 

// while(l1 !== null && l2 !== null){

//     if(l1.val < l2.val){
//         currentNode.next = l1;
//         l1 = l1.next
//     } else {
//         currentNode.next = l2
//         l2 = l2.next
//     }

//     currentNode = currentNode.next
// }

// if(l1 !== null) {
//     currentNode.next = l1;
// } else if (l2 !== null) {
//     currentNode.next = l2
// }

// return dummyHead.next
// }

// var removeDuplicates = function(nums) {
//   for(let i=0; i<nums.length; i++) {
//     if(nums[i] === nums[i+1]) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// };

// var removeElement = function(nums, val) {
//   for(let i=0; i<nums.length; i++) {
//     if(nums[i] === val) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length;
// };

// Faster Solution

// var removeElement = function(nums, val) {
//   var len = nums.length;
//   var count = 0;
//   for (var i = 0; i < len; i++) {
//     if (nums[i] !== val) nums[count++] = nums[i];
//   }
//   return nums;
// };

// var strStr = function(haystack, needle) {
//   if (needle.length === 0) return 0;
//   if (needle === haystack) return 0;
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     if (needle === haystack.substring(i, i+needle.length)) return i
//   }
//   return -1
// };

// var searchInsert = function(nums, target) {
//   if(target<=nums[0]) return 0
//   for (let i=0; i<nums.length; i++) {
//     if(nums[i]<target && (nums[i+1]>=target || nums[i+1] == null)) {
//       return i+1
//     }
//   }
// };

// var maxSubArray = function(nums) {
//   let max = nums[0]
//   let curr = nums[0]
//   for(let i=1; i<nums.length; i++) {
//     curr = Math.max(nums[i], curr+nums[i])
//     max = Math.max(max, curr)
//   }
//   return max;
// };

// var lengthOfLastWord = function(s) {
//   let arr = s.split(' ')
//   for (let i=arr.length-1; i>=0; i--){
//     if(arr[i].length) {
//       return arr[i].length
//     }
//   }
// };

// var plusOne = function(digits) {
//   let last = digits[digits.length-1]
//   let count = digits.length-1
//   let rollover = function(num) {
//     digits[count] = 0
//     count--
//     if(digits[count] === 9){
//       return rollover(digits[count])
//     } 
//     if(!digits[count]){
//       digits.unshift(1)
//     }
//     else {
//       digits[count]++
//     }
//   }
//   if(last !== 9) {
//     digits[digits.length-1]++
//   } else {
//     rollover(last)
//   }
//   return digits
// };

// var addBinary = function(a, b) {
//   let res = ''
//   let carry = 0
//   let val = 0
//   let max = Math.max(a.length, b.length)
//   for(let i=0; i<max; i++) {
//     val = Number(a[a.length - 1 - i] || 0) + Number(b[b.length - 1 - i] || 0) + carry;
//     carry = Math.floor(val/2);
//     res = (val % 2) + res
//   }
//   if(carry) res = 1 + res;
//   return res;
// };

// var mySqrt = function(x) {
//   let y = 1
//   while(y*y <= x){
//     y++
//   }
//   return y-1
// };

// var climbStairs = function(n) {
//   let arr = [1, 1]
//   if (n>1){
//     for(let i=2; i<=n; i++) {
//       arr[i] = arr[i-1] + arr[i-2]
//     }
//   }
//   return arr[arr.length-1]
// };

// var deleteDuplicates = function(head) {
//   let current = head
//   while(current !== null && current.next !== null) {
//     if (current.val === current.next.val) {
//       current.next = current.next.next
//     } else {
//     current = current.next
//     }
//   }
//   return head
// };

// function merge(nums1, m, nums2, n){
//   while(n > 0) {
//       if(nums1[m-1] >nums2[n-1]) {
//           nums1[m+n-1] = nums1[m-1];
//           m--;
//           console.log(nums1)
//       }
//       else {
//           nums1[m+n-1] = nums2[n-1];
//           n--;
//           console.log(nums1)
//       }
//   }
// };

// var inorderTraversal = function(root) {
//   let res = [];

//   return traverse(root, res);

//   function traverse(root, res) {
//     if(root === null) return res;
//     res = traverse(root.left, res);
//     res.push(root.val)
//     return traverse(root.right, res)
//   }
// };


// var isSameTree = function(p, q) {
//   if(p === null || q === null) return (p === q)
//   return ((p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
// };

// var isSymmetric = function(root) {
//   return symmetric(root, root)

//   function symmetric(left, right) {
//     if (left === null && right === null) return true;
//     if (left === null || right === null) return false;
//     return (left.val === right.val) && symmetric(left.right, right.left) && symmetric(left.left, right.right)
//   }
// };

// var maxDepth = function(root) {
//   return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// };

// var singleNumber = function(nums) {
//   let res
//   nums.forEach((element, idx) => {
//     nums.splice(idx, 1)
//     if(!nums.includes(element)) res = element 
//     else nums.splice(idx, 0, element)
//   });
//   return res
// };

// Alternate (XOR/BETTER) solution

// var singleNumber = function(nums) {
//   let res
//   nums.forEach(element => {
//     res = res ^ element
//     console.log(res)
//   });
//   return res
// };

// var maxProfit = function(prices) {
//   let profit = 0
//   let buy = prices[0]
//   for(let i=1; i<prices.length; i++) {
//     if(prices[i]-buy > profit) {
//       profit = prices[i]-buy
//     }
//     if(prices[i] < buy) {
//       buy = prices[i]
//     }
//   }
//   if(profit <= 0) {
//     return 0
//   } else {
//   return profit
//   }
// };

// var majorityElement = function(nums) {
//   let majority = (nums.length)/2
//   let counts = {}
//   for(let num of nums) {
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
//     if(counts[num] > majority) {
//       return num;
//     }
//   }
// };

// var majorityElement = function(nums) {
//   let majority = 0
//   let count = 1
//   for(let i=1; i<nums.length; i++) {
//     if (nums[i] === nums[majority]) {
//       count++
//     } else {
//       count--
//     }
//     if(count === 0) {
//       majority = i
//       count = 1
//     }
//   }
//   return nums[majority];
// };

// var titleToNumber = function(columnTitle) {
//   let getNum = function(letter) {
//     return letter.charCodeAt(0) - 64
//   }
//   let output = 0
//   let counter = columnTitle.length - 1
//   for(let i = 0; i < columnTitle.length; i++) {
//     output = output + (getNum(columnTitle[i]) * (26 ** counter))
//     counter--
//   }
//   return output
// };

// var reverseBits = function(n) {
//   let reversedArr = n.toString(2).padStart(32, "0").split("").reverse()
//   return parseInt(reversedArr.join(""), 2)
// };

// var hammingWeight = function(n) {
//   let count = 0
//   let arr = n.toString(2).split('');
//   for(i = 0; i < arr.length; i++) {
//     if(arr[i] == "1") {
//       count++
//     }
//   }
//   return count
// };

// var isHappy = function(n) {
//   let prev = []
//   let recursive = function(n) {
//     let arr = n.toString().split('')
//     let total = 0
//     if(prev.includes(n)) {
//       return false
//     }
//     prev.push(n)
//     arr.forEach(el => 
//       total = el**2 + total
//       ) 
//     if(total === 1) return true;
//     else return recursive(total)
//   }
//   return recursive(n)
// };

// var isIsomorphic = function(s, t) {
//   let pairsS = {}
//   let pairsT = {}
//   for(let i=0; i<s.length; i++) {
//     if(!pairsS[s[i]] && !pairsT[t[i]]) {
//       pairsS[s[i]] = t[i]
//       pairsT[t[i]] = s[i]
//     }
//     if(pairsS[s[i]] !== t[i] || pairsT[t[i]] !== s[i]) {
//       return false
//     }
//   }
//   return true;
// };

var containsDuplicate = function(nums) {
  for(let i=0; i<nums.length-1; i++) {
    if(nums.includes(nums[i], i+1)) {
      return true
    }
  }
  return false
};

var containsDuplicate = function(nums) {
  const set = new Set([...nums]);
  return set.size != nums.length
};

var containsDuplicate = function(nums) {
  const map = new Map();
  for(let i=0; i<nums.length; i++) {
    if (map.has(nums[i])) return true;
    else map.set(nums[i], true)
  }
  return false;
};