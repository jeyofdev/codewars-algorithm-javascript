/**
 * Return the total fuel cost with a discount
 * 
 * @param {number} litres 
 * @param {number} pricePerLitre 
 */
const fuelPrice = (litres, pricePerLitre) => {
    for (let i = 2; i <= 10; i += 2) {
        if (litres >= i) {
            pricePerLitre -= .05
        }
    }
    
    return Math.round(litres * pricePerLitre * 100) / 100;
}


module.exports = fuelPrice;