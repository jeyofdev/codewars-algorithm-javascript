/**
 * Function that returns true if the walk takes exactly ten minutes (you don't want to be early or late!)
 * And will of course get you back to your starting point.
 * Return false otherwise.
 *
 * @param {array} walk
 */

const isValidWalk = (walk) => {
    if (walk.length !== 10) {
        return false;
    }

    const s = getLengthDirection(walk, 's');
    const n = getLengthDirection(walk, 'n');
    const e = getLengthDirection(walk, 'e');
    const w = getLengthDirection(walk, 'w');

    return s === n && w === e;
};

const getLengthDirection = (actions, direction) => {
    return actions.filter((item) => item === direction).length;
};

module.exports = isValidWalk;
