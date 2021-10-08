/*const multiArr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
]
console.log([1,2,3,4,5].map(num => num * 10))*/

const persons = [
  {name: "John paul", age: 28, school: "ACLC", salary: 20000, history: [24000, 25500, 10000]},
  {name: "John doe", age: 10, school: "CMU", salary: 28000, history: [25000, 25500, 10000]},
  {name: "Jane doe", age: 31, school: "BUKSO", salary: 32000, history: [20000, 25500, 10000]},
];

// calculate the history salary
// persons.map(person => {
//   const personSalaryHistory = person.history.reduce((prev, curr) => prev + curr)
// console.log(`${person.name} total salary in this year: ${personSalaryHistory}`)
// console.log(person.name, person.age, person.school, person.salary)
// })

//
// const personThatAge28 = persons.filter((person) => person.age === 28) // compare
// console.log(personThatAge28[0].name)
//
//
/*
* The Array.from() static method creates a new, shallow-copied
* Array instance from an array-like or iterable object.
* */
// console.log(Array.from('foo'));
// console.log(Array.from([1, 2, 3], x => x + x));
//
// /*
// * The Array.isArray() method determines whether the passed value is an Array.
// * */
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
// // console.log(Array.isArray({}))
//
// /*
// * The Array.of() method creates a new Array instance
// * from a variable number of arguments,
// * regardless of number or type of the arguments.
// * */
// Array.of(7); // [7]
// Array(7); // array of 7 empty slots
//
// Array.of(1, 2, 3); // [1, 2, 3]
// Array(1, 2, 3);    // [1, 2, 3]


/* //// PROBLEM ////
* Create an array with values of numbers and map every items and
* multiply by 5 and then display only that greater than or equal to 20.
* */
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => num * 5).filter(num => num >= 20))

// const numbers = [2, 3, 4]
// const result = numbers.filter((number) => (number >= 20));
// console.log(result);
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const lessThanValue = numArr.filter((val) => val >= 20)
// console.log(lessThanValue);


// const numbers = [1,2,3,4,5];
// const newArr = numbers.map(myFunction);
//
// function myFunction(num) {
//   return num * 5;
// }
//
// const greaterthanValue =newArr.filter((val) => val >= 20)
// console.log(greaterthanValue);
