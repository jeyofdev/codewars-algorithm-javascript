/**
 * Filter an array of strings and return a list containing only the name of your friends
 *
 * @param {array} friends
 */
const friend = (friends) => {
    return friends.filter((friend) => friend.length === 4);
};

module.exports = friend;
