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

function validParentheses(parens) {
  let stack = [];
  let map = {
    '(':')',
    '[':']',
    '{':'}'
  };
  for (let i=0; i<parens.length; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === parens[i]) {
      stack.pop();
    } else {
      stack.push(parens[i])
    }
  }
  return stack.length === 0;
};

console.log(validParentheses('(((((((('))