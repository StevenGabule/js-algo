/*** COPIES ***/
const numbers = [10, 20, 30, 40, 50]
const [first, second, third, ...rest] = numbers;
const copyOfArrays = [...numbers];
copyOfArrays;
copyOfArrays[0] = 100;
copyOfArrays;
numbers;

const people = [{name: 'John'}, {name: 'Juliet'}];
people;
const copyOfPeople = [...people]
copyOfPeople[0].name = 'Jack'
copyOfPeople;
people;
/*** END COPIES ***/

/*** FIND INDEXES ***/
const names = ['Alice', 'Bob', 'Tiff', 'Alice', 'Brice', 'Alice'];
console.log(names.indexOf('Alice'))
console.log(names.indexOf('Alice', 1))
console.log(names.indexOf('Alice', 4))
console.log(names.indexOf('Sally'))

console.log(names.lastIndexOf('Alice'))

console.log(names.findIndex((name) => name === 'Brice'))

const person  = people.find(p => p.name === 'Juliet');
person;
person.name = "Jane";
person;
people;
