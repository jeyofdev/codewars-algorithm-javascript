/**
 * Return the sum of the perimeters of the squares of a rectangle according to the Fibonacci sequence
 * 
 * @param {number} n
 */
const perimeter = (n) => {
    if (n === 0) {
        return (n + 1) * 4;
    }

    let output = [1, 1];

    for (let i = 2; i < n + 1; i++) {
        output.push( (output[output.length - 1]) + (output[output.length - 2]) )
    }

    return (output.reduce( (accumulator, current) => accumulator + current)) * 4
}


module.exports = perimeter;