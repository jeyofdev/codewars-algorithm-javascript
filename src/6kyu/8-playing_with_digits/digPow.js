/**
 * Return a positive integer k, if it exists, such that the sum of the digits of n taken to successive powers of p is equal to k * n.
 * 
 * @param {number} n 
 * @param {number} p 
 */
const digPow = (n, p) => {
    let sum = 0;

    n.toString().split('').forEach( (item) => {
        sum += item ** p;
        p++;
    })

    return Number.isInteger(sum / n) ? sum / n : -1;
}


module.exports = digPow;