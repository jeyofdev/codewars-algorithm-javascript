/**
 * Convert string to camel case
 * 
 * @param {string} str 
 */
const toCamelCase = (str) => {
    const regex = /[_-]/g
    const words = str.replace(regex, ' ').split(' ');

    return words.map( (word, index) => 
        (index === 0) ? word : word.slice(0, 1).toUpperCase() + word.slice(1)
    ).join('');
}



module.exports = toCamelCase;