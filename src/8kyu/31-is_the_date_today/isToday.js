/**
 * Return a Boolean value indicating whether the date is today or not
 *
 * @param {Date} date
 */
const isToday = (date) => {
    const currentDate = new Date();
    return currentDate.toDateString() === date.toDateString();
};

module.exports = isToday;
