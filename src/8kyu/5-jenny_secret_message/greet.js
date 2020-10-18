/**
 * Return a greeting for a particular user
 * 
 * @param {string} name 
 */
const greet = (name) => {
    return (name !== "Johnny") ? `Hello, ${name}!` : "Hello, my love!";
};


module.exports = greet;