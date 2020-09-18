const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true

// ---------------
// Modifying items
// ---------------
let arr = [1,2,3,4];
arr.every((elem, index, arr) => {
    arr[index+1] -= 1;
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 2;
})

// ---------------
// Appending items
// ---------------
arr = [1,2,3,4,5];
const _ = "new";
arr.every((elem, index, arr) => {
    arr.push(_);
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4;
})

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
    arr.pop()
    console.log(`[${arr}][${index}] -> ${elem}`)
    return elem < 4
})


