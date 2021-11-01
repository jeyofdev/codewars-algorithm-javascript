/**
 * Return the result of multiplying values in order
 *
 * @param {array} x
 */
const grow = (x) => {
    return x.reduce((prev, current) => prev * current);
};

module.exports = grow;
