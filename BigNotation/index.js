function addUpTo(n) {
    var total =0;
    for (var i = 1; i <= n; i++) {
        total +=i;
    }
    return total;
}

var a1 = performance.now()
addUpTo(1000000000)
var a2 = performance.now()
console.log(`Time elapsed: ${(a2-a1) / 1000} seconds`);


function addUpTo2(n) {
    return n * (n + 1) / 2;
}

var b1 = performance.now()
addUpTo2(1000000000)
var b2 = performance.now()
console.log(`Time elapsed: ${(b2-b1) / 1000} seconds`);
