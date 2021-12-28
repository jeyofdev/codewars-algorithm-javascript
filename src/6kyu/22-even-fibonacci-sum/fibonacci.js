/**
 * Return the sum of all even numbers in the Fibonacci sequence that are less than the given number
 *
 * @param {number} max
 */

const fibonacci = (max) => {
    let total = 0;
    let a = 1,
        b = 2,
        iterationSum;

    while (b < max) {
        if (b % 2 === 0) total += b;
        iterationSum = a + b;
        a = b;
        b = iterationSum;
    }

    return total;
};

module.exports = fibonacci;
