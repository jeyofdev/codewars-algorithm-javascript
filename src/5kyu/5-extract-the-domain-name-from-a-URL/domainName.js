/**
 * In a url, parses out just the domain name and returns it as a string
 *
 * @param {string} url
 */
const domainName = (url) => {
    return url.replace(/(https?:\/\/)?(www.)?/, '').split('.')[0];
};

module.exports = domainName;
