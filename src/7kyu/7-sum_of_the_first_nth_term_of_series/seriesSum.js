/**
 * Return the sum of the following series up to the nth term (parameter)
 * 
 * @param {number} n
 */
const seriesSum = (n) => {
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3)
    }

    return sum.toFixed(2)
}


module.exports = seriesSum;