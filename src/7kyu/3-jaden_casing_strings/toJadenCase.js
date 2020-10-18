/**
 * Return a character string with the 1st letter of each word in uppercase
 */
String.prototype.toJadenCase = function () {
    return this.split(' ').map( (word) => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
};


module.exports = String.prototype.toJadenCase;