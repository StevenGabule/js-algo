/*
* find the two number which sum of 10
* */
const target = 13;
const listNum = [3, 5, -4, 8, 11, 31, -1, 6]

/*function twoNumberSum(listNum, targetSum) {
  for(let i = 0; i <= listNum.length; i++) {
    let firstNum = listNum[i];
    for(let j = 0; j <= listNum.length; j++) {
      if(j === i) continue;
      let secondNum = listNum[j]
      if(firstNum+secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return []
}*/

/*function twoNumberSum(arrayList, targetSum) {
  const nums = {}
  for (let num in arrayList) {
    let potentialMatch = targetSum - arrayList[num]
    if(arrayList.includes(potentialMatch)) {
      return [potentialMatch, arrayList[num]]
    } else {
      nums[arrayList[num]] = true;
    }
  }
  return []
}*/

function twoNumberSum(arrayList, targetSum) {
  arrayList.sort((a, b) => a - b)
  let left = 0;
  let right = arrayList.length - 1;
  while (left < right) {
    let currentSum = arrayList[left] + arrayList[right]
    if (currentSum === targetSum) return [arrayList[left], arrayList[right]]
    else if(currentSum < targetSum) left += 1
    else if(currentSum > targetSum) right -= 1
  }
  return []
}

console.log(twoNumberSum(listNum, target))
