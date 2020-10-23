/**
 * Return the odd number that appears most often in an array of numbers
 *
 * @param {array} arr
 */
const findOdd = (arr) => {
    let count = {};

    arr.forEach((number) => {
        count[number] = count[number] !== undefined ? count[number] + 1 : 1;
    });

    for (let key in count) {
        if (count[key] % 2 !== 0) {
        return Number(key);
        }
    }
};


module.exports = findOdd;