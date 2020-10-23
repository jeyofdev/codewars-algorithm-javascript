/**
 * Define a number (sum of digits) for each weight in a list and return them in ascending order
 * 
 * @param {string} str
 */
const orderWeight = (str) => {
    const numbers = str.split(" ")

    const additions = numbers.map(number => {
        const weight = number.split('').reduce( (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0)
        return { num: number, weight }
    })
    
    const output = additions.sort( (a, b) =>
        a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
    )
    .map(({ num }) => num)

    return output.join(' ')
}


module.exports = orderWeight;