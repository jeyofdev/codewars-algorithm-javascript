/**
 * Convert a name to initials
 *
 * @param {string} name
 */
const abbrevName = (name) => {
    return name
        .split(' ')
        .map((part) => part.slice(0, 1).toUpperCase())
        .join('.');
};

module.exports = abbrevName;
