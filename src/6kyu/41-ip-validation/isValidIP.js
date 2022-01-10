/**
 * Identify valid IPv4 addresses in dot-decimal format.
 * IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
 *
 * @param {string} str
 */

const isValidIP = (str) => {
    const regex = /^(\d+.){3}\d+$/;
    return (
        regex.test(str) &&
        str
            .split('.')
            .every((n) => n <= 255 && !(n[0] === '0' && n.length > 1)) &&
        str.split('.').length === 4
    );
};

module.exports = isValidIP;
