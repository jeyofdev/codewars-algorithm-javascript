/**
 * Return a number from a string
 *
 * @param {string} value
 */
const filterString = (value) => {
    const num = value
        .split('')
        .filter((item) => item.match(/\d/g))
        .join('');
    return Number(num);
};

module.exports = filterString;
