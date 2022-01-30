let arrayOfNumbers = []
for (let value = 10; value <= 50; value += 10) {
  arrayOfNumbers = [...arrayOfNumbers, value]
}
console.log(arrayOfNumbers)

/* good thing to loop a array*/
for (const index in arrayOfNumbers) {
  console.log(arrayOfNumbers[index]);
}

for (const value of arrayOfNumbers) {
  console.log(value);
}

arrayOfNumbers.forEach((value) => {
  console.log(value)
});

/*** async/await ***/
function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`)
      resolve(id)
    }, 1000)
  })
}

(async function () {
  for (const val of arrayOfNumbers) {
    await getById(val)
  }
})();
