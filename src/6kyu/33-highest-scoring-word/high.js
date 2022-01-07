/**
 * Return the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 *
 * @param {string} x
 */

const high = (x) => {
    const words = x.split(' ');
    const score = words.map((letter) =>
        [...letter].reduce((prev, curr) => curr.charCodeAt(0) - 96 + prev, 0)
    );

    const max = Math.max(...score);
    return words[score.indexOf(max)];
};

module.exports = high;
