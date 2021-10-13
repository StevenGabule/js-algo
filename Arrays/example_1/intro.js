// Webstorm -paid ide VS VSCode

// Create an Array
// console.log(fruits.length) // 2
//
// // Access an Array item using the index position
// let first = fruits[0];
// let last = fruits[fruits.length - 1];
// console.log(first, last)


// loop every item in the array
// fruits.forEach(function(item, index, array) {
//   console.log(item, index)
// })
//
// let fruits = ['Apple', 'Banana']
// // add an item to the end of an array
// fruits.push('orange')
// console.log(fruits)
//
// // remove an item to the end of an array
// fruits.pop()
// console.log(fruits)
//
// // delete the front
// fruits.shift()
// console.log(fruits)
//
// // add to the front array
// fruits.unshift('strawberry', 'Can', 'Dog')
// console.log(fruits)
//
// let pos = fruits.indexOf('strawberry')
// console.log(pos) // 0
//
// let letters = ["a", "b", "c", "d", "e", "f", "g"]
// let removeItem = letters.splice(0, 2);
// console.log("removeItem:" + removeItem)
// console.log(letters)

let newArr1 = [1, 2, 3, 4, 5]
let newArr2 = [6, 7, 8, 9, 10]
let newArr3 = [16, 17, 18, 19, 101]
const totalArr = newArr1.concat(newArr2, newArr3)
// console.log(totalArr)

// check if the value is less than to 10
const lessThanValue = totalArr.filter((val) => val < 10)
console.log(lessThanValue)
ga
