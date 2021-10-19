/**
 * Return all but the last four characters into '#'
 *
 * @param {string} digits
 */
const maskify = (digits) => {
    numbers = digits.split('');
    const hash = numbers.map((letter, index) =>
        index < numbers.length - 4 ? '#' : letter
    );

    return hash.join('');
};

module.exports = maskify;
