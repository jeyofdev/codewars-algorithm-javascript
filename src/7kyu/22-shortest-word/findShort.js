/**
 * Return the length of the shortest word(s)
 *
 * @param {string} str
 */
const findShort = (str) => {
    const lengths = str.split(' ').map((word) => word.length);
    return lengths.sort((a, b) => a - b)[0];
};

module.exports = findShort;
