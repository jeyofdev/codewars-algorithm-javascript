/**
 * Return a number array in the form of a phone number
 *
 * @param {array} numbers
 */
const createPhoneNumber = (numbers) => {
    const result = `(${numbers.slice(0, 3).join('')}) ${numbers
        .slice(3, 6)
        .join('')}-${numbers.slice(6).join('')}`;
    return result;
};

module.exports = createPhoneNumber;
