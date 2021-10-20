/**
 * Check if a user has a senior or open membership
 *
 * @param {array} data
 */
const openOrSenior = (data) => {
    return data.map((infos) =>
        infos[0] >= 55 && infos[1] > 7 ? 'Senior' : 'Open'
    );
};

module.exports = openOrSenior;
