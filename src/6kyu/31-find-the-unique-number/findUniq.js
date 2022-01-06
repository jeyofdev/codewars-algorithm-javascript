/**
 * Return the only unique number from an array
 *
 * @param {array} arr
 */

const findUniq = (arr) => {
    return Number(
        arr
            .filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
            .join('')
    );
};

module.exports = findUniq;
