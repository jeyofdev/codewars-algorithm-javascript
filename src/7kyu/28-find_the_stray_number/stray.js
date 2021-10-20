/**
 * Return the unique number of an array
 *
 * @param {array} numbers
 */
const stray = (numbers) => {
    return numbers.find(
        (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
    );
};

module.exports = stray;
