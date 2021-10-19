/**
 * Alternately returns the values of 2 arrays
 *
 * @param {array} a
 * @param {array} b
 */
const mergeArrays = (a, b) => {
    const maxItem = Math.max(a.length, b.length);

    let output = [];

    for (let i = 0; i < maxItem; i++) {
        output.push(a[i]);
        output.push(b[i]);
    }

    return output.filter((item) => item !== undefined);
};

module.exports = mergeArrays;
