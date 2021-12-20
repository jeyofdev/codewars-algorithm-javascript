/**
 * Return The number of inversions that are pairs of elements in the array that are out of order
 *
 * @param {array} array
 */

const countInversions = (array) => {
    let inversions = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                inversions++;
            }
        }
    }

    return inversions;
};

module.exports = countInversions;
