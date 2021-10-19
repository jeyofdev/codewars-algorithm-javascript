/**
 * Return the number of times true is present in the array
 *
 * @param {boolean} arrayOfSheep
 */
const countSheeps = (arrayOfSheep) => {
    let num = 0;

    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) num++;
    }

    return num;
};

module.exports = countSheeps;
