/**
 * Returns a string but with all five or more letter words reversed
 *
 * @param {string} string
 */

const spinWords = (string) => {
    return string
        .split(' ')
        .map((word) =>
            word.length >= 5 ? word.split('').reverse().join('') : word
        )
        .join(' ');
};

module.exports = spinWords;
