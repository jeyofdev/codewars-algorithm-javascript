/**
 * Check that a number is odd or even
 * 
 * @param {number} number 
 */
const even_or_odd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
};


module.exports = even_or_odd;