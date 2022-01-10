/**
 * Return when given a number >= 0, an Array of ascending length subarrays
 *
 * @param {number} n
 */

const pyramid = (n) => {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push([...Array(i).fill(1)]);
    }

    return arr;
};

module.exports = pyramid;
