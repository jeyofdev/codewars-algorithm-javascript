/**
 * Return sum of even values
 *
 * @param {array} input
 */
const sumEvenNumbers = (input) => {
    const even = input.filter((num) => num % 2 === 0);
    return even.reduce((prev, current) => prev + current);
};

module.exports = sumEvenNumbers;
