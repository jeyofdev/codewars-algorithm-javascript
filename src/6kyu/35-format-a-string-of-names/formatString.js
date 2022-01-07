/**
 * Return a string formatted as a list of names separated by commas except for the last two names,
 * which should be separated by an ampersand
 *
 * @param {object} names
 */

const formatString = (names) => {
    const formatName = names.map((n) => n.name).join(', ');
    return formatName.replace(/,\s(\w+)$/, ' & $1');
};

module.exports = formatString;
