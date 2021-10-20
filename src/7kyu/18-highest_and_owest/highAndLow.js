/**
 * Return the highest and lowest number from a list of numbers from a string
 *
 * @param {string} numbers
 */
const highAndLow = (numbers) => {
    const nums = numbers.split(' ');
    return `${Math.max(...nums).toString()} ${Math.min(...nums).toString()}`;
};

module.exports = highAndLow;
