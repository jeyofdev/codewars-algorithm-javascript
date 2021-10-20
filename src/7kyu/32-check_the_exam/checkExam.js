/**
 * Return the student's score by comparing their answers with the correct answers
 *
 * @param {array} arrA
 * @param {array} arrB
 */
const checkExam = (arrA, arrB) => {
    const reducer = (previousValue, currentValue, index) => {
        if (currentValue === '') return previousValue;
        if (currentValue === arrA[index]) return (previousValue += 4);

        return --previousValue;
    };

    const score = arrB.reduce(reducer, 0);

    return score < 0 ? 0 : score;
};

module.exports = checkExam;
