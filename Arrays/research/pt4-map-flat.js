const numbers = [10, 20, 30, 40, 50]
const numbersTimes100bj = numbers.map(v => ({value: v * 10}))
numbersTimes100bj;

const numberWithNegatives = [-10, 20, 30, -40, -50];
const positiveBy10 = numberWithNegatives.filter((val) => val > 0).map(v => v * 10);
positiveBy10;

const cheapClone = (obj) => JSON.parse(JSON.stringify(obj))

const people = [
  {first: "Jane", last: "Smith", address: {city: "Oakland"}},
  {first: "Sally", last: "Joe", address: {city: "Foster"}},
];
const fullnames = people.map((p) => cheapClone({...p, fullName: `${p.first} ${p.last}`}))
fullnames;
fullnames[0].first = "Penny";
fullnames[0].address.city = "Valencia";
console.log(fullnames);
console.log(people)

// Array from
const arrayFromShallowCopy = Array.from(numbers);
console.log(arrayFromShallowCopy);
const arrayFromShallowCopyAnother = Array.from(numbers, (v) => v * 10);
console.log(arrayFromShallowCopyAnother)

/* array flat */
const numbersArray = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const numbersArrayOfArrays = [
  [[[10, 20, 30]]],
  [[[40, 50, 60]]],
  [[[70, 80, 90]]],
];

const arrayNumberFlat = numbersArray.flat();
arrayNumberFlat;

const arrayNumbersOfArr = numbersArrayOfArrays.flat(Infinity);
arrayNumbersOfArr;

const values = [10,20,30,40,50];
console.log(values.map((v,i) => [v, i]));
console.log(values.flatMap((v,i) => [v, i]));
