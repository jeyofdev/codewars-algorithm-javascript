/**
 * Return if the elements of an array are sorted
 *
 * @param {array} array
 */
const isSortedAndHow = (array) => {
    const arrSort = array.slice().sort((a, b) => a - b);

    if (JSON.stringify(arrSort) === JSON.stringify(array)) {
        return 'yes, ascending';
    } else if (JSON.stringify(arrSort.reverse()) === JSON.stringify(array)) {
        return 'yes, descending';
    }

    return 'no';
};

module.exports = isSortedAndHow;
