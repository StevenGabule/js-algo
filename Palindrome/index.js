// LEARN MORE ABOUT PALINDROME ALGORITHM
function isPalindrome(words) {
  const str = words.split('');
  if (str.length % 2 === 1) {
    return false
  }
  for (let i = 1; i < str.length; i++) {
    if (str[str.length-i] !== str[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('abcdege'))
