/**
 * Return in descending order the list of languages for which the score is at least 60
 *
 * @param {object} results
 */
const myLanguages = (results) => {
    const languages = Object.entries(results).filter(
        (arr) => arr[1] >= 60 && arr
    );
    const sort = languages.sort((a, b) => b[1] - a[1]);
    return sort.map((item) => item[0]);
};

module.exports = myLanguages;
