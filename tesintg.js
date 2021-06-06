/*function testLogicalOr(val) {
    // Only change code below this line

    if (val <=9  || val >= 25) {

        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));q
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));*/

// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 1;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

// console.log(sum([1], 0))
// console.log(sum([2, 3, 4], 1))

sum([2, 3, 4], 1)

function multiply(arr, n) {
    if (n <= 0) {
        3
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

// console.log(multiply([1,2,3], 1))


// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
// Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop) === true) {
                return contacts[i][prop];
            } else {
                return "No such property"
            }
        }
    }
    return "No such contact"
// Only change code above this line
}

// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Bob", "number"));
//
//
// function convertToInteger(str) {
//     return parseInt(str, 2)
// }
//
// console.log(convertToInteger("10011"));
//
// console.log(num)
//
// function checkSign(num) {
//     return num > 1 ? 'positve' : num < -1 ? 'negative' : 'zero'
// }
//
// checkSign(10);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(a => (`<li>${a}</li>`));
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);

// console.log(failuresList)

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }

    // getter
    get temperature() {
        return 5 / 9 * (this._fahrenheit - 32);
    }

    // setter
    set temperature(fahrenheit) {
        this._fahrenheit = fahrenheit * 9.0 / 5 + 32;
    }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result2 = quoteSample.match(vowelRegex); // Change this line
// console.log(result2)

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[1].*?>/; // Change this line
let result3 = text.match(myRegex);
// console.log(result3)

let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result4 = quoteSample1.match(alphabetRegexV2).length;
// console.log(result4)

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result5 = userCheck.test(username);

// console.log(result5)

function zeroArray(m, n) {
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);

// console.log(matrix);


function forecast(arr) {
    // Only change code below this line
    return arr.slice(2, 4);
}

// Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']))

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

// console.log(copyMachine([true, false, true], 2));

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        /* if (!arr[i].includes(elem)) {
             newArr.push([...arr[i]]);
         }*/
        if (arr[i].indexOf(elem) < 0) {
            newArr.push([...arr[i]]);
        }
    }
    // Only change code above this line
    return newArr;
}

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
const userOnline = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let val = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            val += 1;
        }
    }
    return val;
    // Only change code above this line
}

// console.log(countOnline(userOnline));
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    return userObj.data.friends.concat(friend);
    // Only change code above this line
}

// console.log(addFriend(user, 'Pete'));

function factorialize(num) {
    return (num * factorialize(num - 1));
}

// console.log(factorialize(5))

// Find the Longest Word in a String
function findLongestWordLength(str) {
    /*let arr = str.split(" ");
    let temp="";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > temp.length) {
            temp = arr[i];
        }
    }
    return temp.length;*/

    return Math.max(...str.split(' ').map(word => word.length))
}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function largestOfFour(arr) {
    return arr.map(val => Math.max(...val))
    // let temp = 0;
    // let tempArr =  [];
    // for (let i = 0; i < arr.length; i++) {
    // let getMax = Math.max(...arr[i]);
    // tempArr.push(getMax);
    /*if (getMax > temp) {
        temp = getMax;
        tempArr = arr[i];
    }*/
    // }
    // return tempArr
}

//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

function confirmEnding(str, target) {
    let count = target.length;
    return str.substr(str.length - count) === target;
}

// console.log(confirmEnding("Bastian", "n"))

function repeatStringNumTimes(str, num) {
    let newString = "";
    for (let i = 1; i <= num; i++) {
        newString += str;
    }
    return newString;
}

// console.log(repeatStringNumTimes("abc", 3))

function truncateString(str, num) {
    let dot = (parseInt(str.length) <= parseInt(num)) ? '' : '...';
    return str.substr(0, num) + dot;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))

function findElement(arr, func) {
    let num = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return num;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

function booWho(bool) {
    return bool === false || bool === true;

}

// console.log(booWho(null));
// console.log(booWho(false));

function titleCase(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// console.log(titleCase("I'm a little tea pOt"));


function frankenSplice(arr1, arr2, n) {
    let copyThis = arr2.slice();
    copyThis.splice(n, 0, ...arr1);
    return copyThis;
}

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))


function bouncer(arr) {
    return arr.filter(x => x && x !== "" && x !== null && x !== 0 && x !== undefined);
}

// console.log(bouncer([7, "ate", "", false, 9]))

function getIndexToIns(arr, num) {
    // let temp;
    // let setIndex = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if ( arr[i] <  num) {
    //         setIndex = i;
    //     }
    // }
    // return setIndex;
    // return arr.map(val =>  num < val)[1];
    // return arr.filter(val => num > val).length;
    return arr.concat(num).sort((a, b) => a - b).indexOf(num)
}

// console.log(getIndexToIns([40, 60], 50))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every((letter) =>  arr[0].toLowerCase().indexOf(letter) !== -1);
}

// console.log(mutation(["hello", "hey"]))

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
console.clear();

