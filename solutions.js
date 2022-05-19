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

var kWeakestRows = function(mat, k) {
  let kWeakest = []
  mat.forEach((arr, idx) => {
    kWeakest.push([arr.reduce((sum, a) => sum + a, 0), idx])
  })
  kWeakest.sort(function(a, b) {
    return a[0] - b[0]
  })
  return kWeakest.slice(0, k).map(arr => arr[1])
};

