/**
 * Return the number of smileys
 * 
 * @param {array} arr 
 */
const countSmileys = (arr) => {
    let output = 0;
    const valid = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    
    arr.map( (smiley) => valid.includes(smiley) && output++ );

    return output;
}


module.exports = countSmileys;