function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.name = {
        'first': first,
        'last' : last
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

Person.getPrototypeOf()