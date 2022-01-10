/**
 * Count all the occurring characters in a string
 *
 * @param {string} string
 */

const count = (string) => {
    let sum = {};

    string.split('').forEach((letter) => {
        sum = {
            ...sum,
            [letter]: sum[letter] === undefined ? 1 : sum[letter] + 1,
        };
    });

    return sum;
};

module.exports = count;
