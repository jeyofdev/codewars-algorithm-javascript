/**
 * Return the odd numbers in ascending order while leaving the even numbers at their original positions
 *
 * @param {array} array
 */

const sortArray = (array) => {
    const odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    return array.map((num) => (num % 2 !== 0 ? odds.shift() : num));
};

module.exports = sortArray;
