console.time('100 objects in for loop');

function newObject(param) {
    this.value = param;
}

for (var i = 0; i < 100; i++) {
    var obj = new newObject([i]);
}

console.timeEnd('100 objects in for loop');