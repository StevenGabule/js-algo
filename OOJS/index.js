function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        return ("Hi, I'm " + obj.name + '.');
    }
    return obj;
}
const salva = createNewPerson('Salva');
console.log(salva.name)
console.log(salva.greeting())

// constructor functions
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
    }
    this.greeting = function () {
        return ("Hi, I'm " + this.name + '.');
    }
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(person1.name.first)

let NewPerson = {
    name: 'chris john',
    age: 11,
    greeting: function () {
        return 'Hi, ' + this.name + '.';
    }
};

console.log(NewPerson.name)
console.log(NewPerson.name)
console.log(NewPerson.greeting())

let NewPerson2 = Object.create(NewPerson);
NewPerson2.name = "mike ross"
console.log(NewPerson2.name);
