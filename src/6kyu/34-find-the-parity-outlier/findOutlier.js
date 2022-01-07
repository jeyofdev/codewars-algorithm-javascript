/**
 * Either, an array composed entirely of odd integers, or entirely composed of even integers, except for a single integer N.
 * Return this "outlier" N.
 *
 * @param {array} integers
 */

const findOutlier = (integers) => {
    const even = [];
    const odds = [];

    integers.forEach((num) =>
        num % 2 === 0 ? even.push(num) : odds.push(num)
    );

    return even.length === 1 ? even[0] : odds[0];
};

module.exports = findOutlier;
