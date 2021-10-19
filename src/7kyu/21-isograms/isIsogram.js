/**
 * Check if a string contains only letters is an isogram
 *
 * @param {string} str
 */
const isIsogram = (str) => {
    const arr = str.toLowerCase().split('');
    const letters = arr.filter(
        (letter) => arr.indexOf(letter) !== arr.lastIndexOf(letter)
    );

    return !letters.length > 0 ? true : false;
};

module.exports = isIsogram;
