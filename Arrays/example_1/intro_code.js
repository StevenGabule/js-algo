const multiArr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
]

console.log([1,2,3,4,5].map(num => num * 10))

// const multiArrObj = [
//   {
//     name: "John paul",
//     age: 28,
//     school: "ACLC"
//   },
//   {
//     name: "John doe",
//     age: 10,
//     school: "CMU"
//   },
//   {
//     name: "Jane doe",
//     age: 31,
//     school: "BUKSO"
//   },
// ]
// // deconstruct
// // const {name, age, school} = person
// multiArrObj.map(({name, age, school}) => {
//   // if (age > 50) {
//   //   console.log('your so old!')
//   // }
//   // console.log(name, age + 10, school)
// })
//
// const newFilterArr = multiArrObj.filter((person) => person.age === 10) // compare
// console.log(newFilterArr)
//
//
// /*
// * The Array.from() static method creates a new, shallow-copied
// * Array instance from an array-like or iterable object.
// * */
// console.log(Array.from('foo'));
// console.log(Array.from([1, 2, 3], x => x + x));
//
// /*
// * The Array.isArray() method determines whether the passed value is an Array.
// * */
// Array.isArray([1, 2, 3]);  // true
// Array.isArray({foo: 123}); // false
// Array.isArray('foobar');   // false
// Array.isArray(undefined);  // false
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
