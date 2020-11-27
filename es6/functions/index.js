function myFunc(theObject) {
    theObject.make = 'Toyota';
}

let myCar = {make: 'Honda', model: 'Accord', year: 1998};
console.log(myCar.make)

myFunc(myCar);
console.log(myCar.make);

const square = function (number) {
    return number * number
};
console.log(square(4));

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
}
console.log(factorial(4));

function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const f = function (x) {
    return x * x * x;
}

let numbers = [0, 1, 2, 4, 5, 10];
let cube = map(f, numbers);
console.log(cube);

function factorial1(n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial1(n - 1));
    }
}

console.log(factorial1(1));
console.log(factorial1(2));
console.log(factorial1(3));
console.log(factorial1(4));
console.log(factorial1(5));

let num1=20,
    num2=3,
    name='Champ';
function multiply() {
    return num1 * num2;
}

console.log(multiply())

function getScore() {
    let num1=2, num2=3;
    function add() {
        return name + ' score ' + (num1 + num2)
    }
    return add();
}
console.log(getScore());

function loop(x) {
    if (x >= 10)
        return;
    loop(x + 1);
}

console.log(loop(0));

function foo(i) {
    if (i < 0)
        return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(3);

















