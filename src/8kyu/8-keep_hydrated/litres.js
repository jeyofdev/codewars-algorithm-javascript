/**
 * Return the number of liters per hour based on the number of hours elapsed
 * 
 * @param {number} time 
 */
const litres = (time) => {
    return Math.floor(time * 0.5);
}


module.exports = litres;