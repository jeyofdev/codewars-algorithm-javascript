/**
 * Filter an array of integers and strings and return a new list with only strings
 *
 * @param {array} arr
 */
const filterList = (arr) => {
    return arr.filter((item) => typeof item === 'number');
};

module.exports = filterList;
