/**
 * Given an integer n, find two integers a and b such that:
 * A) a >= 0 and b >= 0
 * B) a + b = n
 * C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  

 * Return the digitSum(a) + digitsum(b).
 *
 * @param {number} n
 */

const solve = (n) => {
    const a = '9'.repeat(String(n).length - 1);
    const b = n - a;

    const reducer = (previousValue, currentValue) =>
        previousValue + Number(currentValue);

    return (a + b).split('').reduce(reducer, 0);
};

module.exports = solve;
