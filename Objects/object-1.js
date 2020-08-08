const person = {
    name: ['bob', 'smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        return (this.name[0] + ' ' + this.name[1]
            + ' is ' + this.age
            + ' years old. he likes'
            + this.interests[0]
            + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        return ('Hi! I\'m ' + this.name[0] + '.');
    }
}

console.log(person.name)
console.log(person.name[0])
console.log(person.age)
console.log(person.interests[1])
console.log(person.bio())
console.log(person.greeting())

const person1 = {
    name: 'Chris',
    greeting: function() {
        return ('Hi! I\'m ' + this.name + '.');
    }
}

const person2 = {
    name: 'Deepti',
    greeting: function() {
        return ('Hi! I\'m ' + this.name + '.');
    }
}

console.log(person1.greeting())
console.log(person2.greeting())

