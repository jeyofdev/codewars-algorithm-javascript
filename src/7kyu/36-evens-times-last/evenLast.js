/**
 * Returns the sum of all integers with an even subscript, multiplied by the integer of the last subscript
 *
 * @param {array} input
 */
const evenLast = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }

    const lastInt = numbers[numbers.length - 1];

    const reducer = (acc, num, index) => (index % 2 === 0 ? acc + num : acc);
    const total = numbers.reduce(reducer, 0);

    return total * lastInt;
};

module.exports = evenLast;
