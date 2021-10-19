class SmallestIntegerFinder {
    /**
     * Return the smallest integer
     *
     * @param {array} args
     */
    findSmallestInt(args) {
        const sort = args.sort((a, b) => {
            return a - b;
        });

        return sort[0];
    }
}

module.exports = SmallestIntegerFinder;
