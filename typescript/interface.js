function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "John Paul",
    age: 27,
    hobbies: ['cooking', 'sports']
};
greet({ firstName: "jey", age: 44 });
changeName(person);
greet(person);
