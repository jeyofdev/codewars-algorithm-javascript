/**
 * Returns the sum of all positive numbers.
 *
 * @param {array} arr
 */
const positiveSum = (arr) => {
    const reducer = (previousValue, currentValue) =>
        currentValue >= 0 ? previousValue + currentValue : previousValue;
    return arr.reduce(reducer, 0);
};

module.exports = positiveSum;
