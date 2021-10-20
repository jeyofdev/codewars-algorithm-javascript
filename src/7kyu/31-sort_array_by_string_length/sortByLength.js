/**
 * Return a sorted array containing the ordered strings by the number of characters
 *
 * @param {array} arr
 */
const sortByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
};

module.exports = sortByLength;
