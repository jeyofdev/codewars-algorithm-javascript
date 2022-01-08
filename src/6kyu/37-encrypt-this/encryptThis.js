/**
 * Create secret messages
 *
 * @param {string} text
 */

const encryptThis = (text) => {
    return text
        .split(' ')
        .map((word) =>
            word
                .replace(/(^\w)(\w)(\w*)(\w$)/, '$1$4$3$2')
                .replace(word[0], word.charCodeAt(0))
        )
        .join(' ');
};

module.exports = encryptThis;
