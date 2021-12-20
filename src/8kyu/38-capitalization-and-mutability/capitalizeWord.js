/**
 * Returns the first letter of a string in uppercase
 *
 * @param {string} word
 */
const capitalizeWord = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
};

module.exports = capitalizeWord;
