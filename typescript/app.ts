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
    protected age: number = 26;

    constructor(name:string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age)
        this.setType('old guy!');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('JOHN', 'john');
console.log(person.name, person.username);
person.printAge();


/* INHERITANCE */
class John extends Person {
    constructor(username: string) {
        super("max", username);
        this.age = 31;
    }
}

const john = new John("john");

/* GETTERS AND SETTERS */
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);

plant.species = "AB";
console.log(plant.species);

plant.species = "Green Plant";
console.log(plant.species);

