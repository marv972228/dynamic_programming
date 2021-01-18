/**
 * Write a function `canSum(targetSum, numbers)` that takes in a targetSum
 * and an array of numbers as arguments
 * 
 * The function should return a boolean indicating whether or not it is 
 * possible to generate the targetSum using numbers from hte array.
 * 
 * You may use an elemet of the array as many times as needed.
 * 
 * You may assume that all input numbers are nonnegative.
 */



const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;

        //* if entering in here, which also is a call to a recursion
        //* the return inside the block basically means 
        //* base case of 0 has been hit and bubbles back up
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};


const canSumMemo = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSumMemo(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};


console.log(canSum(7, [2,3])); // true
console.log(canSum(7, [5,3,4,7])); // true
console.log(canSum(7, [2,4])); // false
console.log(canSum(8, [2,3,5])); // true


console.log(canSumMemo(300, [7,14])); // false