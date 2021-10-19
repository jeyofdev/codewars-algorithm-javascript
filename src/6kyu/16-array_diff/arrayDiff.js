/**
 * Remove all the values from an array a that are present in an array b, keeping their order.
 *
 * @param {array} a
 * @param {array} b
 */

const arrayDiff = (a, b) => {
    return a.filter((itemA) => !b.includes(itemA) && itemA);
};

module.exports = arrayDiff;
