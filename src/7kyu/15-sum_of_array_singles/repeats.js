/**
 * Return the unique numbers from an array
 *
 * @param {array} arr
 */
const repeats = (arr) => {
    const unique = arr.filter(
        (num, index) => arr.indexOf(num) === arr.lastIndexOf(num)
    );

    return unique.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );
};

module.exports = repeats;
