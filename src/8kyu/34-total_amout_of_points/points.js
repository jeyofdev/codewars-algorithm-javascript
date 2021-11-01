/**
 * Returns the total number of points based on the results
 *
 * @param {array} games
 */
const points = (games) => {
    const reducer = (prev, current) => {
        const split = current.split(':');
        let point = 0;

        if (Number(split[0]) > Number(split[1])) {
            point += 3;
        } else if (Number(split[0]) === Number(split[1])) {
            point += 1;
        }

        return prev + point;
    };

    return games.reduce(reducer, 0);
};

module.exports = points;
