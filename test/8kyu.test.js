const assert = require('assert');
const multiply = require('../src/8kyu/1-multiply/multiply');
const even_or_odd = require('../src/8kyu/2-even_or_odd/even_or_odd');
const opposite_number = require('../src/8kyu/3-opposite_number/opposite_number');
const repeatStr = require('../src/8kyu/4-string_repeat/string_repeat');
const greet = require('../src/8kyu/5-jenny_secret_message/greet');
const boolToWord = require('../src/8kyu/6-convert_boolean_values_to_strings_yes_or_no/boolToWord');
const removeChar = require('../src/8kyu/7-remove_first_and_last_character/removeChar');


describe("8kyu", () => {
    describe("multiply", () => {
        it("Return the multiplication between 2 number", () => {
            assert.strictEqual(multiply(1, 1), 1);
            assert.strictEqual(multiply(2, 1), 2);
            assert.strictEqual(multiply(2, 2), 4);
            assert.strictEqual(multiply(3, 5), 15);   
        });
    });


    describe("even_or_odd", () => {
        it("Check that a number is odd or even", () => {
            assert.strictEqual(even_or_odd(2), "Even");
            assert.strictEqual(even_or_odd(0), "Even");
            assert.strictEqual(even_or_odd(7), "Odd");
            assert.strictEqual(even_or_odd(1), "Odd");   
        });
    });


    describe("opposite_number", () => {
        it("Return the opposite number", () => {
            assert.strictEqual(opposite_number(1), -1);
            assert.strictEqual(opposite_number(14), -14);
            assert.strictEqual(opposite_number(0), 0);
            assert.strictEqual(opposite_number(4.25), -4.25); 
            assert.strictEqual(opposite_number(-34), 34); 
            assert.strictEqual(opposite_number(3.3333333), -3.3333333); 
            assert.strictEqual(opposite_number(12525220.3325), -12525220.3325); 
        });
    });


    describe("repeatStr", () => {
        it("Return a string that exactly repeats the given src string", () => {
            assert.strictEqual(repeatStr(3, "*"), "***");
            assert.strictEqual(repeatStr(5, "#"), "#####");
            assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
        });
    });


    describe("greet", () => {
        it("should greet some people normally", () => {
            assert.strictEqual(greet("Jim"), "Hello, Jim!");
            assert.strictEqual(greet("Jane"), "Hello, Jane!");
            assert.strictEqual(greet("Simon"), "Hello, Simon!");
        });

        it("should greet Johnny a little bit more special", () => {
            assert.strictEqual(greet("Johnny"), "Hello, my love!");
        });
    });


    describe("boolToWord", () => {
        it("Convert boolean values to strings 'Yes' or 'No'", () => {
            assert.strictEqual(boolToWord(true), 'Yes');
            assert.strictEqual(boolToWord(false), 'No');
        });
    });


    describe("removeChar", () => {
        it("Remove first and last character", () => {
            assert.strictEqual(removeChar('eloquent'), 'loquen');
            assert.strictEqual(removeChar('country'), 'ountr');
            assert.strictEqual(removeChar('person'), 'erso');
            assert.strictEqual(removeChar('place'), 'lac');
        });
    });
});