/*
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"]
*/
function likes(names) {
    let _ch = names.length === 0;
    if (_ch) {
        return "no one likes this";
    }

    if (names.length === 1) {
        return `${names[0]} likes this`
    }

    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }

    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]}  likes this`
    }

    if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`
    }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))


function solutionOther1(names) {
    let templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];

    const idx = Math.min(names.length, 4);

    return templates[idx]
        .replace(/{name}|{n}/g,
            (val)  => val === '{name}' ? names.shift() : names.length);
}

console.log(solutionOther1([]))
console.log(solutionOther1(['Peter']))
console.log(solutionOther1(["Jacob", "Alex"]))
console.log(solutionOther1(["Max", "John", "Mark"]))
console.log(solutionOther1(["Alex", "Jacob", "Mark", "Max"]))

function solution2(names) {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)]
}

console.log(solution2([]))
console.log(solution2(['Peter']))
console.log(solution2(["Jacob", "Alex"]))
console.log(solution2(["Max", "John", "Mark"]))
console.log(solution2(["Alex", "Jacob", "Mark", "Max"]))
