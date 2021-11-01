/**
 * Return the sum of each square of a number
 *
 * @param {array} numbers
 */
const squareSum = (numbers) => {
    const reducer = (prev, current) => prev + Math.pow(current, 2);
    return numbers.reduce(reducer, 0);
};

module.exports = squareSum;
