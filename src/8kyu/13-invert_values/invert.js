/**
 * Return the inverse of an array of numbers
 *
 * @param {array} numbers
 */
const invert = (arr) => {
    return arr.map( (number) => (number !== 0) ? -number : 0);
};

module.exports = invert;
