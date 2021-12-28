/**
 * Return the sums of the parts of an array
 *
 * @param {array} ls
 */

const partsSums = (ls) => {
    ls.unshift(0);
    const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
    let sum = ls.reduce(reducer, 0);

    return ls.map((el) => (sum = sum - el));
};

module.exports = partsSums;
