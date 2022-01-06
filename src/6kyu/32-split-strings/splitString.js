/**
 * Split the string into pairs of two characters
 *
 * @param {string} str
 */

const splitStrings = (str) => {
    const newStr = str.length % 2 !== 0 ? (str += '_') : str;
    return newStr.match(/\w{2}/g) || [];
};

module.exports = splitStrings;
