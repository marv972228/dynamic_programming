/**
 * Write a function `allConstruct(target, wordBank)` that accepts a 
 * target string and an array of strings.
 * 
 * The function should return a 2D array containing all of the ways
 * that the `target` can be constructed by concatenating elements of
 * the `wordBank` array. Each element of the 2D array should represent
 * one combination that constructs the `target`.
 * 
 * You may reuse elements of `wordBank` as many times as needed.
 * 
 * ex:
 * 
 * allConstruct(purple, [purp, p, ur, le, purpl]) -> [[purp, le], [p, ur, p, le]]
 * 
 * base Cases 
 * 
 * allConstruct(hello, [cat, dog, mouse]) -> []
 * allConstruct('', [cat, dog, mouse]) -> [[]]
 * 
 */


const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}

const allConstructMemo = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructMemo(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}

console.log(allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"])); //* 2
console.log(allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //* 1
console.log(allConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //* 0
//console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //* 4
console.log(allConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); //* 0