/**
 * Return "Hello, Name!" to a first name, or says Hello, World! if the name is not given
 *
 * @param {string} name
 */
const hello = (name) => {
    return `Hello, ${name ? name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

module.exports = hello;
