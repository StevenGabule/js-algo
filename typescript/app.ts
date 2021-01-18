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
const userData = {username: "John", age: 27};
const {username, age} = userData;
console.log(username, age);


/* CREATING A CLASSES AND CLASS PROPERTIES*/
class Person {
    name: string;
    private type: string;
    protected age: number = 26;

    constructor(name: string, public username: string) {
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


/* static properties and methods */
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

/* abstract classes */
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

/* private constructors */
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;
    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne("the only one"); // which is the wrong way
let right  = OnlyOne.getInstance();
console.log(right.name);