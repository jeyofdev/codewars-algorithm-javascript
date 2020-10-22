/**
 * Turn over how many times you have to fold a sheet of paper to reach a distance.
 * 
 * @param {number} distance
 */
const foldTo = (distance) => {
    let output = 0

    if (distance < 0) {
        return null
    }
    
    for (let i = 0.0001; i < distance; i *= 2) {
        output += 1
    }
    
    return output
}


module.exports = foldTo;