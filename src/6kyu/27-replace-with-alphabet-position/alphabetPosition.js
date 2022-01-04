/**
 * Replace every letter with its position in the alphabet
 *
 * @param {string} text
 */

const alphabetPosition = (text) => {
    const str = [];

    text.toLowerCase()
        .split('')
        .forEach((letter) => {
            const ascii = letter.charCodeAt() - 96;
            if (ascii > 0 && ascii <= 26) {
                str.push(ascii);
            }
        });

    return str.join(' ');
};

module.exports = alphabetPosition;
