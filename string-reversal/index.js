// @test 1
function reverse(words) {
  const str = words.split('');
  const arr = [];
  for (let i = 0; i <= str.length; i++) {
    arr.push(str[str.length - i])
  }
  return arr.join('');
}
// @test 2
/*function reverse(words) {
  return words.split('').reverse().join('');
}*/
// @test 3
// function reverse(words) {
//   let reversed = ''
//   for (let character of words) {
//     reversed = character + reversed
//   }
//   return reversed;
// }
// @test 4
// function reverse(w) {
//   return w.split('').reduce((r,c) => c+r, '')
// }

console.log(reverse('hello'))
console.log(reverse('Greetings!'))

