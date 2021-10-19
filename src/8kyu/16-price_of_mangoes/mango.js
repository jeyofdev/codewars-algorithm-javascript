/**
 * For a given quantity and price, return the total cost
 *
 * @param {number} quantity
 * @param {number} price
 */
const mango = (quantity, price) => {
    return (quantity - Math.floor(quantity / 3)) * price;
}

module.exports = mango;
