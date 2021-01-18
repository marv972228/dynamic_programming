/**
 * Write a function `countConstruct(target, wordBank)` that accepts a 
 * target string and an array of strings.
 * 
 * The function should return the number of ways that the `target` can
 * be constructed by concatenating elements of the `wordBank` array.
 * 
 * You may reuse elements of `wordBank` as many times as needed
 * 
 * ex:
 * countConstruct(abcdef, [ab, abc, cd, def, abcd]) -> 1
 * 
 */


/**
 * 
 * @param {*} target 
 * @param {*} wordBank 
 */
const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;

};

/**
 * 
 * @param {*} target 
 * @param {*} wordBank 
 */
const countConstructMemo = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstructMemo(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;

};

console.log(countConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"])); //* 2
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //* 1
console.log(countConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //* 0
console.log(countConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //* 4
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); //* 0