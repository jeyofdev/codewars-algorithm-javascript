/**
 * Break up camel casing, using a space between words
 *
 * @param {string} string
 */

const breakCamelCase = (string) => {
    return string
        .split('')
        .map((letter) => (letter.charCodeAt(0) < 91 ? ` ${letter}` : letter))
        .join('');
};

module.exports = breakCamelCase;
