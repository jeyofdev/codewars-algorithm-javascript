/**
 * Check if a number n is divisible by two numbers x AND y
 *
 * @param {number} n
 * @param {number} x
 * @param {number} y
 */
const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0;
};

module.exports = isDivisible;
