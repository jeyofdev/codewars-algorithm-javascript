/**
 * Return the count of distinct case-insensitive alphabetic characters and numeric digits
 * that occur more than once in the input string
 *
 * @param {string} text
 */

const duplicateCount = (text) => {
    const duplicate = {};

    text.split('').forEach((letter) => {
        const letterFormated = letter.toLowerCase();
        duplicate[letterFormated] = duplicate[letterFormated]
            ? duplicate[letterFormated] + 1
            : 1;
    });

    return Object.entries(duplicate).filter(([key, value]) => value > 1 && key)
        .length;
};

module.exports = duplicateCount;
