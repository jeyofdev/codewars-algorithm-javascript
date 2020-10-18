/**
 * Remove first and last character
 * 
 * @param {string} str 
 */
const removeChar = (str) => {
    return str.slice(1, -1);
}


module.exports = removeChar;