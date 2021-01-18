/**
 * Write a function `canConstruct(target, wordBank)` that accepts a 
 * target string and an array of strings.
 * 
 * The function should return a boolean indicating whether or not the 
 * `target` can be constructed by concatenating elements of the
 * `wordBank` array.
 * 
 * You may reuse elements of `wordBank` as many times as needed.
 * 
 * ex:
 *  canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> true
 *  canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) -> false
 *  canConstruct('', [cat, dog, mouse]) -> true  //* base case
 * 
 */

const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        // this checks if some substring(word) is a prefix of some target
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            if (canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;

}

const canConstructMemo = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        // this checks if some substring(word) is a prefix of some target
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            if (canConstructMemo(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;

}

console.log(canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //* true
console.log(canConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //* false
console.log(canConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //* true
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); //* false


