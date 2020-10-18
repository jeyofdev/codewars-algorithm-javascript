const assert = require('assert');
const findOdd = require('../src/6kyu/1-find_the_odd_int/findOdd');
const duplicateEncode = require('../src/6kyu/2-duplicate_encoder/duplicateEncode');
const toCamelCase = require('../src/6kyu/3-convert_string_to_camel_case/toCamelCase');
const countSmileys = require('../src/6kyu/4-count_the_smiley_faces/countSmileys');
const comp = require('../src/6kyu/5-are_they_the_same/comp');


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


    describe("toCamelCase", () => {
        it("Convert string to camel case", () => {
            assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
            assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
            assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
            assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
        });
    });


    describe("countSmileys", () => {
        it("Return the number of smileys", () => {
            assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
            assert.strictEqual(countSmileys([]), 0);
            assert.strictEqual(countSmileys([':D',':~)',';~D',':)']), 4);
            assert.strictEqual(countSmileys([':)',':(',':D',':O',':;']), 2);
            assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
        });
    });


    describe("comp", () => {
        it("Checks if the two arrays have the same elements, with the same multiplicities", () => {
            arrA = [121, 144, 19, 161, 19, 144, 19, 11];
            arrB = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
            assert.strictEqual(comp(arrA, arrB), true);
        });
    });
});
