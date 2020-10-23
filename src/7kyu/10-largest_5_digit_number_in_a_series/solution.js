/**
 * Return the largest 5-digit number in a series
 * 
 * @param array numbers 
 */
const solution = (digits) => {
    digits = digits.toString()

    if (digits.length <= 5) {
        return Number(digits)
    }
    
    return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}


module.exports = solution