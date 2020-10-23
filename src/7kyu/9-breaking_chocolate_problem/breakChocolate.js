/**
 * Return the minimum number of breaks needed from a chocolate bar
 * 
 * @param {string} dimension  the dimension of the chocolate bar
 * @param {string} squares    small squares
 */
const breakChocolate = (n, m) => {
    return ( (n > 0) && (m > 0) ) ? ( (n * m) - 1 ) : 0
}


module.exports = breakChocolate