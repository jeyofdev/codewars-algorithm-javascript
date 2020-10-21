/**
 * Return the formatting of an amount in dollars and cents
 * 
 * @param {number} amount 
 */
const formatMoney = (amount) => {
    return '$' + amount.toFixed(2);
}


module.exports = formatMoney;