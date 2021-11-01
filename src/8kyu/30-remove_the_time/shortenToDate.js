/**
 * Return a date in abbreviated format.
 *
 * @param {string} longDate
 */
const shortenToDate = (longDate) => {
    return longDate.split(',')[0];
};

module.exports = shortenToDate;
