/**
 * Return the multiplicative persistence of a number
 * 
 * @param {number} num
 */
const persistence = (num) => {
    let i = 0;

    for (i; num > 9; i++) {
        num = num.toString().split('').reduce( (accumulator, currentValue) => accumulator * currentValue);
    }

    return i;
}


module.exports = persistence;