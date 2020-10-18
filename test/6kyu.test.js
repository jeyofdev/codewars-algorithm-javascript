const assert = require('assert');
const findOdd = require('../src/6kyu/1-find_the_odd_int/findOdd');
const duplicateEncode = require('../src/6kyu/2-duplicate_encoder/duplicateEncode');


describe("6kyu", () => {
    describe("findOdd", () => {
        it("Return the odd number that appears most often in an array of numbers", () => {
            assert.strictEqual(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
            assert.strictEqual(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
            assert.strictEqual(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
            assert.strictEqual(findOdd([10]), 10);
            assert.strictEqual(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
            assert.strictEqual(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
        });
    });


    describe("duplicateEncode", () => {
        it("Convert each character of a character string into an opening or closing parenthesis", () => {
            assert.strictEqual(duplicateEncode("din"),"(((");
            assert.strictEqual(duplicateEncode("recede"),"()()()");
            assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
            assert.strictEqual(duplicateEncode("(( @"),"))((");
        });
    });
});
