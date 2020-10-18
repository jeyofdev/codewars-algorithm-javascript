/**
 * Return the first longest string consisting of k consecutive strings taken in an array
 * 
 * @param {array} arr
 * @param {number} k
 */
const longestConsec = (arr, k) => {
    if ( (arr.length == 0) || (k > arr.length) || (k <= 0) ) {
        return '';
    }

    let output = '';
    let currentString = '';
    
    arr.forEach( (item, index) => {
        currentString = arr.slice(index, index + k).join('');
        if (currentString.length > output.length ){
            output = currentString;
        }
    })

    return output;
}


module.exports = longestConsec;