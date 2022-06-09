// const markdownParser = markdown => {
//   let split = markdown.split(' ')
//   let hashtags = split[0].length
//   let hOpen = "<h" + hashtags + ">"
//   let hClose = "</h" + hashtags + '>'
//   if(split.length === 1) {
//     return split[0]
//   } 
//   if(split[0].length > 6 || !split[0].includes('#')) {
//     return markdown
//   }
// else {
//   return hOpen + split.slice(1, split.length).join(' ') + hClose;
//   }
// };

// console.log(markdownParser("### Smaller Header"))

// function maskify (cc) {
//   let len = cc.length
//   let last4 = cc.substring(len - 4)
//   if(len < 4) {
//     return cc
//   } else {
//     return last4.padStart(len, "#")
//   }
// }

function triangular (n) {
  if(n < 0) {
    return 0
  } else {
    return (n * (n + 1)) / 2
  }
}

console.log(triangular(-10))