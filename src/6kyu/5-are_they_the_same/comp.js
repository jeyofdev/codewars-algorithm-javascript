/**
 * Checks if the two arrays have the same elements, with the same multiplicities
 * 
 * Means that the elements of array B are the elements of array A squared, regardless of the order.
 * 
 * @param {array} arrA 
 * @param {array} arrB
 */
const comp = (arrA, arrB) => {
    if (arrA === null || arrB === null) {
        return false
    }

    const sortArrA = arrA.map( (value) => value * value ).sort();
    const sortArrB = arrB.sort();

    return sortArrA.every( (number, index) => (number === sortArrB[index]));
}


module.exports = comp;