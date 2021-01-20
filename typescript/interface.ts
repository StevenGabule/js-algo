interface NamedPerson {
    firstName: string;
    age?: number;

    [propName: string]: any;

    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log(`Hello, ${person.firstName}`)
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna"
}

// @ts-ignore
const person = {
    firstName: "John Paul",
    age: 27,
    hobbies: ['cooking', 'sports'],
    greet(lastName: string) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
};

// greet({firstName: "jey", age: 44});
// @ts-ignore
changeName(person);
// @ts-ignore
greet(person);
// @ts-ignore
person.greet("gabule");

// @ts-ignore
class Person implements NamedPerson {
    firstName: string;
    lastName: string;

    greet(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

// @ts-ignore
const myPerson = new Person();
myPerson.firstName = "John Paul";
myPerson.lastName = "Gabule";
greet(myPerson)
myPerson.greet(myPerson.lastName);


/*** //////  FUNCTION TYPES  ////// ***/
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (val1: number, val2: number): number {
    return (val1 + val2) * 2;
}
console.log(myDoubleFunction(10, 20));

/***  INTERFACE INHERITANCE ***/
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 24,
    firstName: "asdasd",
    greet(lastName: string): void {
        console.log("Hello!")
    }
}

console.log(oldPerson)

