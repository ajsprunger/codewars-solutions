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

var removeDuplicates = function(nums) {
  for(let i=0; i<nums.length; i++) {
    if(nums[i] === nums[i+1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

