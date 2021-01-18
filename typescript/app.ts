/*/////// rest and spread operator //////*/
const numbers = [1, 2, 3, 4];

// spread operator example
console.log(Math.max(33, 44, 55, 66));
console.log(Math.max(...numbers));

// rest operator example - run in calling fun.
function makeArray(name: string, ...args: number[]) {
    return args;
}

console.log(makeArray("Max", 1, 2, 3, 4));

/*////// destructuring ////// */
// array
const myHobbies = ['Reading manga', 'Watch Movies Online'];
const [hb1, hb2] = myHobbies;
console.log(hb1, hb2);

// objects
const userData = { username: "John", age: 27};
const {username, age} = userData;
console.log(username, age);


/* CREATING A CLASSES AND CLASS PROPERTIES*/
class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name:string, public username: string) {
        this.name = name;
    }
}

const person = new Person('JOHN', 'john');
console.log(person.name, person.username);


