/**
 * Define a hashtag according to a string
 *
 * @param {string} str
 */
const generateHashtag = (str) => {
    const words = str
        .split(' ')
        .filter((word) => word !== '')
        .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
        .join('');

    if (words.length === 0 || words.length >= 140) return false;

    return `#${words}`;
};

module.exports = generateHashtag;
