/**
 * Replace any number less than 5 by 0 and any number 5 and higher by 1
 *
 * @param {string} x
 */
const fakeBin = (x) => {
    return x
        .split('')
        .map((num) => (num < 5 ? 0 : 1))
        .join('');
};

module.exports = fakeBin;
