function multiplier(factor) {
  return function (number) {
    return number * factor;
  }
}

const twice = multiplier(2)

// console.log(twice(5))


function power(base, exp) {
  if (exp === 0) return 1
  else return base * power(base, exp - 1)
}

// console.log(power(2,10))

function findSolution(target) {
  function find(start, history) {
    if (start == target) {
      return history;
    } else if (start > target) {
      return null
    } else {
      return find(start + 5, "(" + history + " + 5 )") || find(start * 3, "(" + history + " * 3)")
    }
  }
  return find(1, "1")
}

console.log(findSolution(24))
