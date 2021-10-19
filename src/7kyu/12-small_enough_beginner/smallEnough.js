/**
 * Check that all the values in a table are less than or equal to a limit value
 *
 * @param {array} arr
 * @param {number} limit
 */
const smallEnough = (arr, limit) => {
    const isInferior = (currentValue) => currentValue <= limit;
    return arr.every(isInferior);
};

module.exports = smallEnough;
