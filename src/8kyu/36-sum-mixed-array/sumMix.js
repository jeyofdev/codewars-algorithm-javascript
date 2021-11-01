/**
 * Return the sum of the values in the array as if all were numbers
 *
 * @param {array} x
 */
const sumMix = (x) => {
    return x.reduce((prev, current) => prev + Number(current), 0);
};

module.exports = sumMix;
