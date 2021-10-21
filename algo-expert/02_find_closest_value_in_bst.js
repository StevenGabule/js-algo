const {abs} = Math;

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, parseFloat("inf"))
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree.length === 0) return closest;
  if (abs(target - closest) > abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest)
  } else if(target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest)
  } else {
    return closest;
  }
}
