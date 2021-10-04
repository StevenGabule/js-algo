// Webstorm VS vscode

// Create an Array
// let fruits = ['Apple', 'Banana']
// console.log(fruits.length) // 2

// Access an Array item using the index position
// let first = fruits[0];
// let last = fruits[fruits.length-1];
// console.log(first, last)

// fruits.forEach(function(item, index, array) {
  // parseInt = convert data to integer
  // parseFloat = convert data to float
  // if (index === Number("1")) {
  //   console.log('Apple is my favorite')
  // }
  // console.log(item, index)
// })
// add an item to the end of an array
// fruits.push('orange')
// console.log(fruits)

// remove an item to the end of an array
// fruits.pop()
// console.log(fruits)

// delete the front
// fruits.shift()
// console.log(fruits)

// add to the front array
// fruits.unshift('strawberry', 'Can', 'Dog')
// console.log(fruits)

// let pos = fruits.indexOf('strawberry')
// console.log(pos) // 0

let letters = ["a", "b", "c", "d", "e", "f", "g"]
let removeItem = letters.splice(1, 1);
console.log("removeItem:" + removeItem)
console.log(letters)
