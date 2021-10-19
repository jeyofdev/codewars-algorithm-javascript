/**
 * Return all the integers between two given numbers
 *
 * @param {number} startNum
 * @param {number} endNum
 */
const range = (startNum, endNum) => {
    let result = [];

    for (let i = startNum + 1; i < endNum; i++) {
        result.push(i);
    }

    return result;
};

module.exports = range;
