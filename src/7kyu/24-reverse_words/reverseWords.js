/**
 * Return a string with every word reversed
 *
 * @param {string} str
 */
const reverseWords = (str) => {
    return str
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
};

module.exports = reverseWords;
