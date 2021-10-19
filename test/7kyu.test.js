const assert = require('assert');
const getCount = require('../src/7kyu/1-vowel_count/getCount');
const getMiddle = require('../src/7kyu/2-get_the_middle_character/getMiddle');
const toJadenCase = require('../src/7kyu/3-jaden_casing_strings/toJadenCase');
const accum = require('../src/7kyu/4-mumbling/accum');
const inAscOrder = require('../src/7kyu/5-are_the_numbers_in_order/inAscOrder');
const cookingTime = require('../src/7kyu/6-boiled_eggs/cookingTime');
const seriesSum = require('../src/7kyu/7-sum_of_the_first_nth_term_of_series/seriesSum');
const foldTo = require('../src/7kyu/8-folding_your_way_to_the_moon/foldTo');
const breakChocolate = require('../src/7kyu/9-breaking_chocolate_problem/breakChocolate');
const solution = require('../src/7kyu/10-largest_5_digit_number_in_a_series/solution');
const maskify = require('../src/7kyu/11-credit_card_mask/maskify');
const smallEnough = require('../src/7kyu/12-small_enough_beginner/smallEnough');
const range = require('../src/7kyu/13-get_the_integers_between_two_numbers/range');
const mergeArrays = require('../src/7kyu/14-merge-two-arrays/mergeArrays')
const repeats = require('../src/7kyu/15-sum_of_array_singles/repeats')
const filterString = require('../src/7kyu/16-filter_the_number/filterString')


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


    describe("foldTo", () => {
        it("Turn over how many times you have to fold a sheet of paper to reach a distance.", () => {
            assert.strictEqual(foldTo(384000000),42)
        });
    });


    describe("breakChocolate", () => {
        it("Return the minimum number of breaks needed from a chocolate bar", () => {
            assert.strictEqual(breakChocolate(5, 5) , 24)
            assert.strictEqual(breakChocolate(1, 1) , 0)
        });
    });


    describe("solution", () => {
        it("Return the largest 5-digit number in a series", () => {
            assert.strictEqual(solution(1234567890), 67890);
        });
    });


    describe("maskify", () => {
        it("Return all but the last four characters into '#'.", () => {
            assert.strictEqual(maskify('4556364607935616'), '############5616');
            assert.strictEqual(maskify('1'), '1');
            assert.strictEqual(maskify('11111'), '#1111');
        });
    });


    describe("smallEnough", () => {
        it("Check that all the values in a table are less than or equal to a limit value", () => {
            assert.strictEqual(smallEnough([66, 101], 200), true);
            assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
            assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
            assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
        });
    });


    describe("range", () => {
        it("Return all the integers between two given numbers", () => {
            assert.deepStrictEqual(range(2,9), [3,4,5,6,7,8])
            assert.deepStrictEqual(range(6,8), [7])
            assert.deepStrictEqual(range(2,9), [3,4,5,6,7,8])
        });
    });


    describe("mergeArrays", () => {
        it("Alternately returns the values of 2 arrays", () => {
            assert.deepStrictEqual(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
            assert.deepStrictEqual(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
            assert.deepStrictEqual(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
            assert.deepStrictEqual(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
        });
    });


    describe("repeats", () => {
        it("Return the unique numbers from an array", () => {
            assert.deepStrictEqual(repeats([4,5,7,5,4,8]), 15);
            assert.deepStrictEqual(repeats([9, 10, 19, 13, 19, 13]), 19);
            assert.deepStrictEqual(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
            assert.deepStrictEqual(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
            assert.deepStrictEqual(repeats([5, 10, 19, 13, 10, 13]), 24);        
        });
    });


    describe("filterString", () => {
        it("Return a number from a string", () => {
            assert.strictEqual(filterString("123"), 123, 'Just return the numbers');
            assert.strictEqual(filterString("a1b2c3"), 123, 'Just return the numbers');
            assert.strictEqual(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers')
        });
    });
});