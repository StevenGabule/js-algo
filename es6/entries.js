const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
    console.log(index, element);

const iterator = array1.entries();
for (let e of iterator) {
    console.log(e);
}
