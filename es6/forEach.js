const colors = ['red', 'blue', 'orange'];

colors.forEach(color => console.log(color))

const numbers = [1,2,3,4,5,6];
let sum = 0;

function added(number) {
    sum += number
}

numbers.forEach(added)
console.log(sum)
