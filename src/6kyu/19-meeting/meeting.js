/**
 * Return a string uppercase sorted in alphabetical order and by last name.
 *
 * @param {string} s
 */

const meeting = (s) => {
    return s
        .toUpperCase()
        .split(';')
        .map((name) => name.split(':').reverse().join(', '))
        .sort()
        .map((person) => `(${person})`)
        .join('');
};

module.exports = meeting;
