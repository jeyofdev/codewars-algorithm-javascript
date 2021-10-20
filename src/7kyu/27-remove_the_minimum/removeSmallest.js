/**
 * Remove the smallest number from an array
 *
 * @param {array} numbers
 */
const removeSmallest = (numbers) => {
    const firstMinIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.filter((num, index) => index !== firstMinIndex);
};

module.exports = removeSmallest;
