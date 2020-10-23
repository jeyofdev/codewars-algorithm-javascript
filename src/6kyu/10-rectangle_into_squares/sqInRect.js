/**
 * Return an array with the size of each of the squares of a "true" rectangle
 * 
 * @param {number} length  the length of the rectangle
 * @param {number} width   the width of the rectangle
 */
const sqInRect = (length, width) => {
    if (length === width) {
        return null;
    }

    let output = [];
    
    while (length > 0 && width > 0){
        if (length > width) {
            output.push(width)
            length -= width
        } else {
            output.push(length)
            width -= length
        }
    }

    return output;
}


module.exports = sqInRect;