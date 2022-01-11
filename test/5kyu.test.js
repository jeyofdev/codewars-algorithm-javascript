const assert = require('assert');
const orderWeight = require('../src/5kyu/1-weight_for_weight/orderWeight');
const perimeter = require('../src/5kyu/2-perimeter_of_squares_in_a_rectangle/perimeter');
const moveZeros = require('../src/5kyu/3-moving-zeros-to-the-end/moveZeros');
const generateHashtag = require('../src/5kyu/4-the-hashtag-generator/generateHashtag');

describe('5kyu', () => {
    describe('orderWeight', () => {
        it('Define a number (sum of digits) for each weight in a list and return them in ascending order', () => {
            assert.strictEqual(
                orderWeight('103 123 4444 99 2000'),
                '2000 103 123 4444 99'
            );
            assert.strictEqual(
                orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
                '11 11 2000 10003 22 123 1234000 44444444 9999'
            );
        });
    });

    describe('perimeter', () => {
        it('Return the sum of the perimeters of the squares of a rectangle according to the Fibonacci sequence', () => {
            assert.strictEqual(perimeter(0), 4);
            assert.strictEqual(perimeter(5), 80);
            assert.strictEqual(perimeter(7), 216);
            assert.strictEqual(perimeter(20), 114624);
            assert.strictEqual(perimeter(30), 14098308);
        });
    });

    describe('moveZeros', () => {
        it('Move all zeros in an array to the end, preserving the order of other elements', () => {
            assert.deepStrictEqual(
                moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
                [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
            );
        });
    });

    describe('generateHashtag', () => {
        it('Define a hashtag according to a string', () => {
            assert.strictEqual(
                generateHashtag(''),
                false,
                'Expected an empty string to return false'
            );
            assert.strictEqual(
                generateHashtag(' '.repeat(200)),
                false,
                'Still an empty string'
            );
            assert.strictEqual(
                generateHashtag('Do We have A Hashtag'),
                '#DoWeHaveAHashtag',
                'Expected a Hashtag (#) at the beginning.'
            );
            assert.strictEqual(
                generateHashtag('Codewars'),
                '#Codewars',
                'Should handle a single word.'
            );
            assert.strictEqual(
                generateHashtag('Codewars Is Nice'),
                '#CodewarsIsNice',
                'Should remove spaces.'
            );
            assert.strictEqual(
                generateHashtag('Codewars is nice'),
                '#CodewarsIsNice',
                'Should capitalize first letters of words.'
            );
            assert.strictEqual(
                generateHashtag('code' + ' '.repeat(140) + 'wars'),
                '#CodeWars'
            );
            assert.strictEqual(
                generateHashtag(
                    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
                ),
                false,
                'Should return false if the final word is longer than 140 chars.'
            );
            assert.strictEqual(
                generateHashtag('a'.repeat(139)),
                '#A' + 'a'.repeat(138),
                'Should work'
            );
            assert.strictEqual(
                generateHashtag('a'.repeat(140)),
                false,
                'Too long'
            );
        });
    });
});
