/**
 * Get the middle character
 * 
 * @param {string} str 
 */
const getMiddle = (str) => {
    const count = str.length;
    const middle = count / 2;
    const sliceBegin = (count % 2 === 0) ? middle - 1 : middle - 0.5;
    
    return str.slice(sliceBegin, middle + 1);
}


module.exports = getMiddle;