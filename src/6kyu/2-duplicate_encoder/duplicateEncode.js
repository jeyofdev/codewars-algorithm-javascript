/**
 * Convert each character of a character string into an opening or closing parenthesis
 * 
 * Convert a string to a new string where each character in the new string is "(" if this character appears only once in the original string, 
 * or ")" if this character appears more than once in the original chain.
 * 
 * @param {string} word 
 */
const duplicateEncode = (word) => {
    const letters = word.toLowerCase().split('');
    const output = letters.map( (letter, index, word) => 
        (word.indexOf(letter) === word.lastIndexOf(letter)) ? '(' : ')'
    );
                                
    return output.join('');
}



module.exports = duplicateEncode;