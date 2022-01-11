/**
 * Move all zeros in an array to the end, preserving the order of other elements
 *
 * @param {array} arr
 */
const moveZeros = function (arr) {
    const zeros = [];
    const newArr = [];

    arr.forEach((num) => (num === 0 ? zeros.push(0) : newArr.push(num)));

    return [...newArr, ...zeros];
};

module.exports = moveZeros;
