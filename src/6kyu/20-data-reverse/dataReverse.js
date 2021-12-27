/**
 * Return a reverse data stream
 *
 * @param {array} data
 */

const dataReverse = (data) => {
    const segmentsLength = data.length / 8;

    const output = [];

    for (let i = segmentsLength; i >= 0; i--) {
        const begin = i * 8;
        const last = begin + 8;

        const segment = data.slice(begin, last);

        segment.forEach((item) => {
            output.push(item);
        });
    }

    return output;
};

module.exports = dataReverse;
