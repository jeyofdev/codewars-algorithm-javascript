/**
 * Return the number of people who are still on the bus after the last bus station (after the last array)
 *
 * @param {array} busStops
 */
const number = (busStops) => {
    return busStops.reduce(
        (previousValue, [on, off]) => previousValue + on - off,
        0
    );
};

module.exports = number;
