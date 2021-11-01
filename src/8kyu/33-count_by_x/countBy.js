/**
 * Return an array of the first (n) multiples of (x)
 *
 * @param {array} numbers
 */
const countBy = (x, n) => {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x);
    }

    return z;
};

module.exports = countBy;
