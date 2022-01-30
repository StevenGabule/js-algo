function fastPower(number, power) {
  return number ** power;
}

function iterativePower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i += 1) {
    result *= number;
  }
  return result;
}

function factorial(number) {
  if (number === 0) return 1;
  return factorial(number - 1) * number;
}

/***
* get all possible pairs out of provided letters
* example:
* letter = ['a', 'b']
* output = ['aa', 'ab', 'ba', 'bb']
* @param {string[]} letters
* @return {*[]}
***/
function pairs(letters) {
  const result = [];
  for (let i = 0; i < letters.length; i += 1) {
    for (let j = 0; j < letters.length; j += 1) {
      result.push(`${letters[i]}${letters[j]}`);
    }
  }
  return result;
}

function multiplyArrayInPlace(array, multiplier) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] *= multiplier;
  }
  return array;
}

function multiplyArray(array, multiplier) {
  const multipliedArray = [...array];
  for (let i = 0; i < multipliedArray.length; i += 1) {
    for (let j = 0; j < multipliedArray.length; j += 1) {
      multipliedArray[j][i] *= multiplier
    }
  }
  return multipliedArray;
}

console.log(fastPower(3, 2)) // 9
console.log(iterativePower(3, 2)) // 9
console.log(factorial(5)) // 120
console.log(pairs(['a', 'b'])) // [ 'aa', 'ab', 'ba', 'bb' ]
console.log(multiplyArrayInPlace([1, 2, 3], 2)) // [ 2, 4, 6 ]
console.log(multiplyArray([[1, 3, 5], [2, 4, 6], [3, 6, 8]], 2)) // [ [ 2, 6, 10 ], [ 4, 8, 12 ], [ 6, 12, 16 ] ]
