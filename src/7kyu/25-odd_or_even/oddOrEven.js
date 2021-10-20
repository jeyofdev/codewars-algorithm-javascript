/**
 * Return if the sum of elements of an array is odd or even
 *
 * @param {array} arr
 */
const oddOrEven = (arr) => {
    const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );

    return sum % 2 === 0 ? 'even' : 'odd';
};

module.exports = oddOrEven;
