/**
 * Return the digits of a number in descending order
 *
 * @param {number} n
 */
const descendingOrder = (n) => {
    const nums = n
        .toString()
        .split('')
        .sort((a, b) => b - a);
    return Number(nums.join(''));
};

module.exports = descendingOrder;
