/**
 * Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array
 *
 * @param {array} array
 */

const findMissingLetter = (array) => {
    for (let i in array) {
        const letter = array[i];
        const nextLetter = array[Number(i) + 1];

        if (nextLetter.charCodeAt(0) - letter.charCodeAt(0) === 2) {
            return String.fromCharCode(letter.charCodeAt(0) + 1);
        }
    }
};

module.exports = findMissingLetter;
