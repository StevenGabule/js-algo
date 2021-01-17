/*/////// rest and spread operator //////*/
var numbers = [1, 2, 3, 4];
// spread operator example
console.log(Math.max(33, 44, 55, 66));
console.log(Math.max.apply(Math, numbers));
// rest operator example - run in calling fun.
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 1, 2, 3, 4));
/*////// destructuring ////// */
// array
var myHobbies = ['Reading manga', 'Watch Movies Online'];
var hb1 = myHobbies[0], hb2 = myHobbies[1];
console.log(hb1, hb2);
// objects
var userData = { username: "John", age: 27 };
var username = userData.username, age = userData.age;
console.log(username, age);
