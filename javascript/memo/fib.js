const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};


const fibmemo = (n, memo = {}) => {

    if (n in memo) return memo[n];

    if (n <= 2) return 1;
    memo[n] = fibmemo(n - 1, memo) + fibmemo(n - 2, memo);
    return memo[n];

};


console.log(fibmemo(500));