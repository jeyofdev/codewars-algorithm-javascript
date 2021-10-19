/**
 * Returns the sum of 2 arrays of numbers
 *
 * @param {array} arr1
 * @param {array} arr2
 */
const arrayPlusArray = (arr1, arr2) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return arr1.reduce(reducer) + arr2.reduce(reducer); //something went wrong
}

module.exports = arrayPlusArray;
