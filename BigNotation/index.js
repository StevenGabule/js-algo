function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let a1 = performance.now();
addUpTo(1000000000);

let a2 = performance.now();
console.log(`Time elapsed: ${(a2 - a1) / 1000} seconds`);

function addUpTo2(n) {
  return n * (n + 1) / 2;
}

let b1 = performance.now();
addUpTo2(1000000000);

let b2 = performance.now();
console.log(`Time elapsed: ${(b2 - b1) / 1000} seconds`);
