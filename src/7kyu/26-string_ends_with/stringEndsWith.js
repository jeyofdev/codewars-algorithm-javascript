/**
 * Check that the first argument passed ends with the 2nd argument
 *
 * @param {string} str
 * @param {string} ending
 */
const stringEndsWith = (str, ending) => {
    return ending === str.slice(-ending.length) || ending === '';
};

module.exports = stringEndsWith;
