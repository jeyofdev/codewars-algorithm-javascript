const assert = require('assert');
const findOdd = require('../src/6kyu/1-find_the_odd_int/findOdd');
const duplicateEncode = require('../src/6kyu/2-duplicate_encoder/duplicateEncode');
const toCamelCase = require('../src/6kyu/3-convert_string_to_camel_case/toCamelCase');
const countSmileys = require('../src/6kyu/4-count_the_smiley_faces/countSmileys');
const comp = require('../src/6kyu/5-are_they_the_same/comp');
const longestConsec = require('../src/6kyu/6-consecutive_strings/longestConsec');
const inArray = require('../src/6kyu/7-which_are_in/inArray');
const digPow = require('../src/6kyu/8-playing_with_digits/digPow');
const persistence = require('../src/6kyu/9-persistent_bugger/persistence');
const sqInRect = require('../src/6kyu/10-rectangle_into_squares/sqInRect');


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


    describe("longestConsec", () => {
        it("Return the first longest string consisting of k consecutive strings taken in an array", () => {
            assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
            assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
            assert.strictEqual(longestConsec([], 3), "");
            assert.strictEqual(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
            assert.strictEqual(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu");
            assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
            assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
            assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "");
            assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "");
        });
    });


    describe("inArray", () => {
        it("Return an array sorted r in lexicographical order arrA whose strings are substrings of strings of arrB.", () => {
            a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

            assert.deepStrictEqual(inArray(["xyz", "live", "strong"], a2), ["live", "strong"])
            assert.deepStrictEqual(inArray(["live", "strong", "arp"], a2), ["arp", "live", "strong"])
            assert.deepStrictEqual(inArray(["tarp", "mice", "bull"], a2), [])
        });
    });


    describe("digPow", () => {
        it("Return a positive integer k, if it exists, such that the sum of the digits of n taken to successive powers of p is equal to k * n.", () => {
            assert.strictEqual(digPow(89, 1), 1)
            assert.strictEqual(digPow(92, 1), -1)
            assert.strictEqual(digPow(46288, 3), 51)

        });
    });


    describe("sqInRect", () => {
        it("Return an array with the size of each of the squares of a 'true' rectangle", () => {
            assert.deepStrictEqual(sqInRect(5, 5), null)
            assert.deepStrictEqual(sqInRect(5, 3), [3, 2, 1, 1])
            assert.deepStrictEqual(sqInRect(3, 5), [3, 2, 1, 1])
            assert.deepStrictEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
        });
    });
});
