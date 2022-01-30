/*function palindrome(str) {
  if (str.length % 2 === 1) return false;
  const check = str.split('').reverse().join('')
  return check === str;
}*/

function palindrome(str) {
  if (str.length % 2 === 1) return false;
  return str.split('').every((ch, i) => ch === str[str.length - i - 1])
}

console.log(palindrome('abcba'))
