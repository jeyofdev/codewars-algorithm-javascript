/**
 * Convert boolean values to strings 'Yes' or 'No'
 * 
 * @param {boolean} bool 
 */
const boolToWord = (bool) => {
    return bool ? "Yes" : "No";
};


module.exports = boolToWord;