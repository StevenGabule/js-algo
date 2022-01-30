const fib = (n) => {
  if ( n <= 2) return 1;
  return fib(n - 1) + fib(n - 2)
}

console.log("fib1::6",fib(6));    // 8
console.log("fib1::7",fib(7));    // 13
console.log("fib1::8",fib(8));    // 21
console.log("fib1::50",fib(50));  //
