/**
 * Return an array sorted r in lexicographical order arrA whose strings are substrings of strings of arrB.
 * 
 * @param {array} arrA 
 * @param {array} arrB 
 */
const inArray = (arrA, arrB) => {
    const str = arrB.join(' ');
    const output = arrA.filter( (substring) => str.indexOf(substring) !== -1)
    
    return output.sort();
}


module.exports = inArray;