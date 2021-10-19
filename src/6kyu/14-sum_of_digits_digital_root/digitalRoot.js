/**
 * Return the numeric root of all digits in a number.
 *
 * @param {number} n
 */

const digitalRoot = (n) => {
    if (n < 10) {
        return n;
    }

    const reducer = (previousValue, currentValue) =>
        previousValue + +currentValue;

    return digitalRoot(n.toString().split('').reduce(reducer, 0));
};

module.exports = digitalRoot;
