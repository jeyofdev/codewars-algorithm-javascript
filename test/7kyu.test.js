const assert = require('assert');
const getCount = require('../src/7kyu/1-vowel_count/getCount');
const getMiddle = require('../src/7kyu/2-get_the_middle_character/getMiddle');
const toJadenCase = require('../src/7kyu/3-jaden_casing_strings/toJadenCase');
const accum = require('../src/7kyu/4-mumbling/accum');
const inAscOrder = require('../src/7kyu/5-are_the_numbers_in_order/inAscOrder');
const cookingTime = require('../src/7kyu/6-boiled_eggs/cookingTime');
const seriesSum = require('../src/7kyu/7-sum_of_the_first_nth_term_of_series/seriesSum');


describe("7kyu", () => {
    describe("getCount", () => {
        it("Return the number (count) of vowels in the given string", () => {
            assert.strictEqual(getCount("abracadabra"), 5);
            assert.strictEqual(getCount("pear tree"), 4);
            assert.strictEqual(getCount("o a kak ushakov lil vo kashu kakao"), 13);
            assert.strictEqual(getCount("my pyx"), 0);
        });
    });


    describe("getMiddle", () => {
        it("Get the middle character", () => {
            assert.strictEqual(getMiddle("test"),"es");
            assert.strictEqual(getMiddle("testing"),"t");
            assert.strictEqual(getMiddle("middle"),"dd");
            assert.strictEqual(getMiddle("A"),"A");
        });
    });


    describe("toJadenCase", () => {
        it("Return a character string with the 1st letter of each word in uppercase", () => {
            const strA = "How can mirrors be real if our eyes aren't real";
            assert.strictEqual(strA.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

            const strB = "The moment that truth is organized it becomes a lie.";
            assert.strictEqual(strB.toJadenCase(), "The Moment That Truth Is Organized It Becomes A Lie.");
        });
    });


    describe("accum", () => {
        it("Return a letter accumulator from a character string", () => {
            assert.strictEqual(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
            assert.strictEqual(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
            assert.strictEqual(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
            assert.strictEqual(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
            assert.strictEqual(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
        });
    });


    describe("inAscOrder", () => {
        it("Check that the numbers in an array are in ascending order", () => {
            assert.strictEqual(inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
            assert.strictEqual(inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
            assert.strictEqual(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
            assert.strictEqual(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
        });
    });


    describe("cookingTime", () => {
        it("Turn over the time in minutes needed to boil all the eggs", () => {
            assert.strictEqual(cookingTime(0), 0, '0 eggs');
            assert.strictEqual(cookingTime(5), 5, '5 eggs');
            assert.strictEqual(cookingTime(10), 10, '10 eggs');
            assert.strictEqual(cookingTime(16), 10, '16 eggs');
            assert.strictEqual(cookingTime(20), 15, '20 eggs');
        });
    });


    describe("seriesSum", () => {
        it("Return the sum of the following series up to the nth term (parameter)", () => {
            assert.strictEqual(seriesSum(1), "1.00")
            assert.strictEqual(seriesSum(2), "1.25")
            assert.strictEqual(seriesSum(3), "1.39")
            assert.strictEqual(seriesSum(4), "1.49")
        });
    });
});