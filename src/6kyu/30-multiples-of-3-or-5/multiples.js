/**
 * Returns the sum of all the multiples of 3 or 5 below the number passed in
 *
 * @param {number} number
 */

const multiples = (number) => {
    return number < 3
        ? 0
        : Array.from({ length: number }, (_, i) => i++)
              .filter((num) => num % 3 === 0 || num % 5 === 0)
              .reduce((prev, curr) => prev + curr, 0);
};

module.exports = multiples;
