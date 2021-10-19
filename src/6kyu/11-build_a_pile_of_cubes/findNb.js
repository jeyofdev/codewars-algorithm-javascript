/**
 * Return the total number of cubes based on the total volume
 * 
 * @param {number} volume  total volume of the building
 */
function findNb(volume) {
    let total = 0
    let n = 0

    while(total < volume) {
        n += 1
        total += n * n * n
    }

    return total === volume ? n : -1
}



module.exports = findNb;