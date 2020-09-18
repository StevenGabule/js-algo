/*
const numbers = [1,2,3,4,5];
numbers.map(number => console.log(number))*/

/*
const numbers = [1,4,9, 16, 32, 200];
const roots = numbers.map(num => Math.sqrt(num))
console.log(roots)
console.log(numbers)*/

/*
// Using map to reformat objects in an array
let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];
let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
console.log(reformattedArray)*/

/*Mapping an array of numbers using a function containing an argument*/
let numbers = [1, 4, 9]

function multiple(num) {
    return num * 2
}

let doubles = numbers.map(multiple)
console.log(doubles)

let map = Array.prototype.map
let a = map.call('Hello World', function (x) {
    return x.charCodeAt(0)
})
console.log(a)

console.log(["1", "2", "3"].map(parseInt))

function returnInt(element) {
    return parseInt(element, 10)
}

console.log(['1', '2', '3'].map(returnInt)); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
console.log(['1', '2', '3'].map(str => parseInt(str)))
console.log(['1', '2', '3'].map(Number))
console.log(['1.1', '2.2e2', '3e300'].map(Number))
console.log(['1.1', '2.2e2', '3e300'].map(str => parseInt(str)))