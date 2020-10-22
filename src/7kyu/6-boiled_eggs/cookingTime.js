/**
 * Turn over the time in minutes needed to boil all the eggs
 * 
 * @param {number} eggs
 */
const cookingTime = (eggs) => {
    let boil = 5
    let eggsAtOnce = 8
    let multiplicator = Math.ceil(eggs / eggsAtOnce)
    
    return (eggs === 0) ? 0 : (boil * multiplicator)
}


module.exports = cookingTime;