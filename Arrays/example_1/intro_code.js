const multiArr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
]
console.log([1,2,3,4,5].map(num => num * 10))

const persons = [
  {name: "John paul", age: 28, school: "ACLC", salary: 20000, history: [24000, 25500, 10000]},
  {name: "John doe", age: 10, school: "CMU", salary: 28000, history: [25000, 25500, 10000]},
  {name: "Jane doe", age: 31, school: "BUKSO", salary: 32000, history: [20000, 25500, 10000]},
];

// calculate the history salary
persons.map(person => {
  const personSalaryHistory = person.history.reduce((prev, curr) => prev + curr)
  console.log(`${person.name} total salary in this year: ${personSalaryHistory}`)
  console.log(person.name, person.age, person.school, person.salary)
})

const personThatAge28 = persons.filter((person) => person.age === 28) // compare
console.log(personThatAge28[0].name)
/*
* The Array.from() static method creates a new, shallow-copied
* Array instance from an array-like or iterable object.
* */
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));

/*
* The Array.isArray() method determines whether the passed value is an Array.
* */
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
console.log(Array.isArray({}))

/*
* The Array.of() method creates a new Array instance
* from a variable number of arguments,
* regardless of number or type of the arguments.
* */
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]

/* PROBLEM
*  Create an array with values of numbers and map every items and
*  multiply by 5 and then display only that greater than or equal to 20.
* */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => num * 5).filter(num => num >= 20))

const numbers = [2, 3, 4]
const result = numbers.filter((number) => (number >= 20));
console.log(result);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lessThanValue = numArr.filter((val) => val >= 20)
console.log(lessThanValue);

const numbers = [1,2,3,4,5];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 5;
}

const greaterValue =newArr.filter((val) => val >= 20)
console.log(greaterValue);

// validate 3 numbers and display the greatest number
const nums1 = 1;
const nums2 = 13;
const nums3 = 18;
let greatestNum;

if(nums1 > nums2 && nums1 > nums3) {
    greatestNum = nums1;
} else if(nums2 > nums1 && nums2 > nums3){
    greatestNum = nums2;
} else {
  greatestNum = nums3;
}
console.log(greatestNum)
var array = [20 , 60, 30];
var largest= 0;

for (i=0; i<=largest;i++){
  if (array[i]>largest) {
     largest=array[i];
  }
}
console.log(`The greatest Number is`,largest);

const num1 = 120;
const num2 = 60;
const num3 = 30;
let greatest;

if(num1 >= num2 && num1 >= num3) {
  greatest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  greatest = num2;
} else {
  greatest = num3;
}

// console.log("The greatest number is " + greatest);
//
// console.log(30+20)
// console.log(30-20)
// console.log(30*20)
// console.log(30/20)
// console.log(30%20)


/*
* CONSOLE APPLICATION
* ENTER YOUR PIN: 2
* {pin: 2, name: "John doe", age: 24, school: "CMU", balance: 28000,history: [25000, 25500, 10000]},
* */
// const pin = 1; // user input
// const loggedUser = employees.find(employee => employee.pin === pin)
// console.log(loggedUser.name)
// console.log(loggedUser.history.join(", "))
const employees = [
  {pin: 1, name: "John paul", age: 28, school: "ACLC", balance: 20000, history: [24000, 25500, 10000]},
  {pin: 2, name: "John doe", age: 24, school: "CMU", balance: 28000,history: [25000, 25500, 10000]},
  {pin: 3, name: "Jane doe", age: 31, school: "BUKSO", balance: 32000,history: [20000, 25500, 10000]},
];

const rd = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rd.question('Enter your pin number: ', (pin) =>  {
  const data = employees.filter(customer => customer.pin === parseInt(pin))[0]
  console.log(data.name); //filter customer
  rd.close();
});
