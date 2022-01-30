const numbers = [10, -20, 30, -40, 50];

const allPositive = numbers.filter(v => v > 0);
allPositive;

const allNegativeNumbers = numbers.filter(v => v < 0);
allNegativeNumbers;

const people = [{name: 'John'}, {name: 'Ann'}];
const jPeople = people.filter(({name}) => name.startsWith('J'))
jPeople;
jPeople[0].name = 'Jack';
jPeople;
people;

const numero = [10, 20, 30, 40, 50];
const middleThree = numero.filter((_, i) => i > 0 && i < 4)
middleThree;

const easierMiddleThree = numero.slice(1,4);
easierMiddleThree;
numero;
