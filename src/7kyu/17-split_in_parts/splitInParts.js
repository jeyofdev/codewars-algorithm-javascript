/**
 * Split a given string into different strings of equal size
 *
 * @param {string} s
 * @param {number} partLength
 */
const splitInParts = (s, partLength) => {
    let output = [];

    for (let i = 0; i < s.length; i += partLength) {
        output.push(s.slice(i, i + partLength));
    }

    return output.join(' ');
};

module.exports = splitInParts;
