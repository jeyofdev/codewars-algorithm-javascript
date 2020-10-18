/**
 * Return the number (count) of vowels in the given string
 * 
 * @param {string} str 
 */
const getCount = (str) => {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    str.split('').map( (letter) => vowels.map( (vowel) => (vowel === letter) && vowelsCount++ ));

    return vowelsCount;
}


module.exports = getCount;