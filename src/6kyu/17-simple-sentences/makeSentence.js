/**
 * Return a sentence out of the given parts
 *
 * @param {array} parts
 */

const makeSentence = (parts) => {
    const sentences = parts
        .map((item) => (item === '.' ? null : item))
        .join(' ')
        .trim();
    return sentences.replace(/ , /g, ', ') + '.';
};

module.exports = makeSentence;
