/**
 * Return the average of the given array rounded down to its nearest integer
 *
 * @param {array} marks
 */
const getAverage = (marks) => {
    const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
    return Math.floor(marks.reduce(reducer) / marks.length);
};

module.exports = getAverage;
