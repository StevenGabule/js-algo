/*
* @src https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
* =========================================================================
* The destructuring assignment syntax is a JavaScript expression that makes
* it possible to unpack values from arrays, or properties from objects,
* into distinct variables.
* =========================================================================
* */

let a, b;
let c, d, rest;

[a, b] = [10, 20];
console.log(a, b);

[c, d, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);


({a, b} = {a: 20, b: 10});
console.log(a, b);

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a, b);
console.log(rest);

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y, z);

/*
* ===================
* Array destructuring
* ===================
* */

const foo = ['one', 'two', 'three'];
const [red, yellow, blue] = foo;
console.log(red, yellow, blue);

/*
* Default values
* A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
* */

[a = 5, b = 7] = [1];
console.log(a, b);

/*
* Swapping variables
* Two variables values can be swapped in one destructuring expression.
* */

let num1 = 1, num2 = 3;
[num1, num2] = [num2, num1];
console.log(num1, num2)

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr)

/*
* Parsing an array returned from a function
* It's always been possible to return an array from a function. Destructuring can
* make working with an array return value more concise.
* */

function f() {
    return [11, 22, 33];
}

[a, , b] = f();
console.log(a, b);

/*
* =================================================
* Unpacking values from a regular expression match
* =================================================
* */

function $parseProtocol($url) {
    const $parseUrl = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec($url);
    if (!$parseUrl) return false;
    console.log($parseUrl);
    const [, protocol, fullhost, fullpath] = $parseUrl;
    return protocol;
}

console.log($parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'))

/*
* ===========================================
* Object destructuring
* ===========================================
* */
const user = {id: 42, is_verified: true};
const {id, is_verified} = user;
console.log(id, is_verified);


/*
* Assigning to new variable names
* A property can be unpacked from an object and assigned to a variable with a different name than the object property.
* */
const o = {p: 42, q: true};
const {p: foos, q: bar} = o;
console.log(foos, bar);

/*
* Assigning to new variables names and providing default values
* A property can be both
* * Unpacked from an object and assigned to a variable with a different name.
* * Assigned a default value in case the unpacked value is undefined.
* */

const {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa, bb);

const $user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Joe',
    }
}

function userId({id}) {
    return id;
}

function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
}

console.log(userId($user));
console.log(whois($user));

/*
* Setting a function parameter's default value
* */
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
}

drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});

/*
* Nested object and array destructuring
* */
const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;
console.log(englishTitle);
console.log(localeTitle);

/*
* For of iteration and destructuring
* */
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
}

/*
* Computed object property names and destructuring
* */
let key = 'z';
let {[key]: foon} = {z: 'bar'};
console.log(foon);

/*
* Rest in Object Destructuring
* */
let {fa, ga, ...rest1} = {fa: 10, ga: 20, c: 30, d: 40};
console.log(rest1);

const foot = {'fizz-buzz': true};
const {'fizz-buzz': fizzBuzz} = foot;
console.log(fizzBuzz);

/*
* Combined Array and Object Destructuring
* */
const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name);


/*
* The prototype chain is looked up when the object is deconstructed
*/
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
console.log(self);
console.log(prot);















