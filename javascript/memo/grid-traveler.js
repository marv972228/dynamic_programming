/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner
 * and your gaol is to travel to the bottom-riht corner. You may only moe down or 
 * right
 * 
 */


 /**
  * Recursive O(2^(n+m)) time complexity solution and O(n+m) space
  * @param {int} m 
  * @param {int} n 
  */
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m- 1, n) + gridTraveler(m, n - 1);
};


/**
 * 
 * @param {int} m 
 * @param {int} n 
 * @param {object} memo 
 */
const gridTravelerMemo = (m, n, memo={}) => {
    // flip the key as 1,2 == 2,1 in terms of how many ways to travel through same
    // sub-problem
    const key = m <= n ? m + ',' + n : n + ',' + m;

    // base cases -------------------------
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    // ------------------------------------

    // store in memo
    memo[key] = gridTravelerMemo(m- 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
 
    // return from memo object
    return memo[key];
};


console.log(gridTravelerMemo(18,18));
console.log(gridTravelerMemo(180,180));
