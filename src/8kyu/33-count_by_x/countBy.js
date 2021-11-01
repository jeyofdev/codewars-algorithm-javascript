/**
 * Return an array of the first (n) multiples of (x)
 *
 * @param {number} x
 * @param {number} n
 */
const countBy = (x, n) => {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x);
    }

    return z;
};

module.exports = countBy;
