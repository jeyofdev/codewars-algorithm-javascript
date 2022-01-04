/**
 * Returns a list of items without any elements with the same value next to each other and preserving the original order of elements
 *
 * @param {string | array} iterable
 */

const uniqueInOrder = (iterable) => {
    const arr = Array.isArray(iterable) ? iterable : iterable.split('');
    return arr.filter((_, i) => arr[i] !== arr[i + 1]);
};

module.exports = uniqueInOrder;
