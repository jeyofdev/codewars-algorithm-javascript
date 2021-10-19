/**
 * Return the digits of a number n in an array in reverse order
 *
 * @param {number} n
 */
const digitize = (n) => {
    return n
        .toString()
        .split('')
        .reverse()
        .map((num) => Number(num));
};

module.exports = digitize;
