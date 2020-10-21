/**
 * Return the number of positive numbers and the sum of negative numbers
 * 
 * @param {array} numbers 
 */
const countPositivesSumNegatives = (numbers) => {
    if (numbers === null || numbers.length === 0 ) {
        return []
    }

    const count = (numbers > 0) ? numbers.length : numbers.filter( (number) => (number > 0)).length;
    const sum = numbers.filter ( (number) => 
        (number < 0)).reduce( (accumulator, currentValue) => accumulator + currentValue
    );

    return [count, sum];
}


module.exports = countPositivesSumNegatives;