/**
 * Sort a given string. Each word in the string will contain a single number. 
 * This number is the position the word should have in the result.
 *
 * @param {string} words
 */

const order = (words) => {
    return words
        .split(' ')
        .sort((a, b) => a.match(/[0-9]/) - b.match(/[0-9]/))
        .join(' ');
};

module.exports = order;
