/**
 * Return the sum of numbers of an array
 *
 * @param {array} numbers
 */
const sum = (numbers) => {
    if (numbers.length !== 0) {
        const reducer = (previousValue, currentValue) =>
            previousValue + currentValue;
        return numbers.reduce(reducer);
    }

    return 0;
};

module.exports = sum;
