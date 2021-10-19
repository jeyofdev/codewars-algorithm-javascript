/**
 * Return the summation of every number from 1 to num
 *
 * @param {number} num
 */
const summation = (num) => {
    let output = 0;

    for (let i = 1; i <= num; i++) {
        output += i;
    }

    return output;
};

module.exports = summation;
