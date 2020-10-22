/**
 * Check that the numbers in an array are in ascending order
 * 
 * @param {array} numbers 
 */
const inAscOrder = (numbers) => {
    return numbers.join('') === numbers.sort( (a, b) => a - b).join('');
}


module.exports = inAscOrder;