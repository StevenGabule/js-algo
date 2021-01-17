import * as _ from 'lodash';

async function hello() {
    return 'world';
}

interface Person {
    first: string;
    last: string;

    [key: string]: any
}

const person: Person = {
    first: 'John',
    last: 'Doe'
}

const person1: Person = {
    first: 'John1',
    last: 'Doe1',
    fast: true,
    age: 23
}

function pow(x: number, y: number): void {
    Math.pow(x, y).toString();
}

pow(5, 10);

// arrays
type MyList = [number?, string?, boolean?];
const arr: MyList = [];
arr.push(1);
arr.push('23');
arr.push(false);


// generics
class Observable<T> {
    constructor(public value: T) {
    }
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);

