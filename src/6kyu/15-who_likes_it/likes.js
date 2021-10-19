/**
 * Return the first names of an array as a string
 *
 * @param {array} names
 */

const likes = (names) => {
    const countNames = names.length;

    switch (countNames) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names.join(' and ')} like this`;
        case 3:
            return `${names[0]}, ${names.slice(1).join(' and ')} like this`;
        default:
            return `${names.slice(0, 2).join(', ')} and ${
                countNames - 2
            } others like this`;
    }
};

module.exports = likes;
