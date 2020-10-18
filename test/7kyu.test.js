const assert = require('assert');
const getCount = require('../src/7kyu/1-vowel_count/getCount');
const getMiddle = require('../src/7kyu/2-get_the_middle_character/getMiddle');
const toJadenCase = require('../src/7kyu/3-jaden_casing_strings/toJadenCase');
const accum = require('../src/7kyu/4-mumbling/accum');


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
});