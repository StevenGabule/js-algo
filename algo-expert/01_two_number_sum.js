const target = -5; // display a two number that equals to the target number
const listNum = [3, 5, -4, 8, 11, 31, -1, 6]

/*
* find the two number which sum of 10
* */
function twoNumberSumSol1(listNum, targetSum) {
  for (let i = 0; i <= listNum.length; i++) {
    let firstNum = listNum[i];
    for (let j = 0; j <= listNum.length; j++) {
      if (j === i) continue;
      let secondNum = listNum[j]
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return []
}

console.log("twoNumberSumSol1::", twoNumberSumSol1(listNum, target))

function twoNumberSumSol2(arrayList, targetSum) {
  const nums = {}
  for (const value of arrayList) {
    let potentialMatch = targetSum - value;
    if (arrayList.includes(potentialMatch)) return [potentialMatch, value]
    else nums[value] = true
  }
  return []
}

console.log("twoNumberSumSol2::", twoNumberSumSol2(listNum, target))

function twoNumberSumSol3(arrayList, targetSum) {
  arrayList.sort((a, b) => a - b)
  let left = 0;
  let right = arrayList.length - 1;
  while (left < right) {
    let currentSum = arrayList[left] + arrayList[right]
    if (currentSum === targetSum) return [arrayList[left], arrayList[right]]
    else if (currentSum < targetSum) left += 1
    else if (currentSum > targetSum) right -= 1
  }
  return []
}

console.log("twoNumberSumSol3::",twoNumberSumSol3(listNum, target))
