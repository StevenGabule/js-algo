/* O(n^2) time | O(1) space */
/*function twoNumberSum(array, targetSum) {
    let i = 0;
    let j = 0;
    let firstNum = 0;
    let secondNum = 0;
    let arr = [];
    for (i in Array.from(Array(array.length - 1).keys())) {
        firstNum = array[i];
        if (!arr.includes(firstNum)) {
            arr.push(firstNum);
            for (j in Array.from((i + 1, Array(array.length - 1).keys()))) {
                secondNum = array[j];
                if (firstNum + secondNum == targetSum) {
                    // return [firstNum, secondNum];
                    return [i, j];
                }
            }
        }
    }
    return [0,0];
}

const arr = [-4, -1, 1, 3, 5, 6, 8, 11];
console.log(twoNumberSum(arr, 13));*/

/*** Second approach: O(n) time | O(n) space ***/
function twoNumberSum1(array, targetSum) {
    let nums = {};
    let num, potentialMatch;
    for (num in array) {
        potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        }
        nums[num, array[num]] = potentialMatch;
    }
    return [];
}

const arr = [-4, -1, 1, 3, 5, 6, 8, 11];
// const arr = [0, 0];
console.log(twoNumberSum1(arr, 8));

/*** third approach: O(nLog(n)) | O(1) space***/
/*
function twoNumberSum(arr, targetSum) {
    arr.sort(((a, b) => a - b));
    let currentSum =0;
    let left =0;
    let right = arr.length - 1;
    while (left < right) {
        currentSum = arr[left] + arr[right];
        if (currentSum == targetSum)
            // return [left, right];
            return [arr[left], arr[right]];
        else if (currentSum < targetSum) {
            left+=1;
        } else if (currentSum > targetSum) {
            right -= 1;
        }
    }
    return [];
}
const arr = [-4, -1, 1, 3, 5, 6, 8, 11];
console.log(twoNumberSum(arr, 13));
*/

function twoSum(nums, target) {
    let len = nums.length;
    let result;

    nums.some((v, i, a) => {
        let rem = target - v;

        for (let j = 0; j < len; j++) {
            if (j !== i && rem === a[j]) {
                result = [i,j];
                break;
            }
        }

        return result && result.length;
    });

    return result;
};
const arr1 = [-4, -1, 1, 3, 5, 6, 8, 11];
console.log(twoSum(arr1, 13));
