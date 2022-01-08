/**
 * Check a string, and returns true if it is in the form of a phone number
 *
 * @param {string} phoneNumber
 */

const validPhoneNumber = (phoneNumber) => {
    const regex = /^\(\d{3}\) \d{3}-\d{4}$/;

    console.log(phoneNumber);
    return regex.test(phoneNumber);
};

module.exports = validPhoneNumber;
