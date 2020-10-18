/**
 * Return a letter accumulator from a character string
 * 
 * @param {string} str 
 */
const accum = (str) => {
    return str.split('').map( (letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index) ).join('-');
}


module.exports = accum;