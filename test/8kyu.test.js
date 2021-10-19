const assert = require('assert');
const multiply = require('../src/8kyu/1-multiply/multiply');
const even_or_odd = require('../src/8kyu/2-even_or_odd/even_or_odd');
const opposite_number = require('../src/8kyu/3-opposite_number/opposite_number');
const repeatStr = require('../src/8kyu/4-string_repeat/string_repeat');
const greet = require('../src/8kyu/5-jenny_secret_message/greet');
const boolToWord = require('../src/8kyu/6-convert_boolean_values_to_strings_yes_or_no/boolToWord');
const removeChar = require('../src/8kyu/7-remove_first_and_last_character/removeChar');
const litres = require('../src/8kyu/8-keep_hydrated/litres');
const formatMoney = require('../src/8kyu/9-dollars_and_cents/formatMoney');
const fuelPrice = require('../src/8kyu/10-fuel_calculator/fuelPrice');
const basicOp = require('../src/8kyu/11-basic_mathematical_operations/basicOp');
const countPositivesSumNegatives = require('../src/8kyu/12-count_of_positives_sum_of_negatives/countPositivesSumNegatives');
const invert = require('../src/8kyu/13-invert_values/invert');
const sum = require('../src/8kyu/14-sum_arrays/sum');
const arrayPlusArray = require('../src/8kyu/15-array-plus-array/arrayPlusArray');
const mango = require('../src/8kyu/16-price_of_mangoes/mango');
const hello = require('../src/8kyu/17-hello_name_or_world/hello');
const getAverage = require('../src/8kyu/18-get_the_mean_of_an_array/getAverage');
const positiveSum = require('../src/8kyu/19-sum_of_positive/positiveSum');
const makeNegative = require('../src/8kyu/20-return-negative/makeNegative');


describe('8kyu', () => {
    describe('multiply', () => {
        it('Return the multiplication between 2 number', () => {
            assert.strictEqual(multiply(1, 1), 1);
            assert.strictEqual(multiply(2, 1), 2);
            assert.strictEqual(multiply(2, 2), 4);
            assert.strictEqual(multiply(3, 5), 15);   
        });
    });


    describe('even_or_odd', () => {
        it('Check that a number is odd or even', () => {
            assert.strictEqual(even_or_odd(2), 'Even');
            assert.strictEqual(even_or_odd(0), 'Even');
            assert.strictEqual(even_or_odd(7), 'Odd');
            assert.strictEqual(even_or_odd(1), 'Odd');   
        });
    });


    describe('opposite_number', () => {
        it('Return the opposite number', () => {
            assert.strictEqual(opposite_number(1), -1);
            assert.strictEqual(opposite_number(14), -14);
            assert.strictEqual(opposite_number(0), 0);
            assert.strictEqual(opposite_number(4.25), -4.25); 
            assert.strictEqual(opposite_number(-34), 34); 
            assert.strictEqual(opposite_number(3.3333333), -3.3333333); 
            assert.strictEqual(opposite_number(12525220.3325), -12525220.3325); 
        });
    });


    describe('repeatStr', () => {
        it('Return a string that exactly repeats the given src string', () => {
            assert.strictEqual(repeatStr(3, '*'), '***');
            assert.strictEqual(repeatStr(5, '#'), '#####');
            assert.strictEqual(repeatStr(2, 'ha '), 'ha ha ');
        });
    });


    describe('greet', () => {
        it('should greet some people normally', () => {
            assert.strictEqual(greet('Jim'), 'Hello, Jim!');
            assert.strictEqual(greet('Jane'), 'Hello, Jane!');
            assert.strictEqual(greet('Simon'), 'Hello, Simon!');
        });

        it('should greet Johnny a little bit more special', () => {
            assert.strictEqual(greet('Johnny'), 'Hello, my love!');
        });
    });


    describe('boolToWord', () => {
        it('Convert boolean values to strings "Yes" or "No"', () => {
            assert.strictEqual(boolToWord(true), 'Yes');
            assert.strictEqual(boolToWord(false), 'No');
        });
    });


    describe('removeChar', () => {
        it('Remove first and last character', () => {
            assert.strictEqual(removeChar('eloquent'), 'loquen');
            assert.strictEqual(removeChar('country'), 'ountr');
            assert.strictEqual(removeChar('person'), 'erso');
            assert.strictEqual(removeChar('place'), 'lac');
        });
    });


    describe('litres', () => {
        it('Return the number of liters per hour based on the number of hours elapsed', () => {
            assert.strictEqual(litres(2), 1, 'should return 1 litre');
            assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
            assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
            assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
            assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
            assert.strictEqual(litres(1787), 893, 'should return 893 litres');
            assert.strictEqual(litres(0), 0, 'should return 0 litres');
        });
    });


    describe('formatMoney', () => {
        it('Return the formatting of an amount in dollars and cents', () => {
            assert.strictEqual(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
            assert.strictEqual(formatMoney(3), '$3.00', 'That\'s not formatted the way we expected.');
            assert.strictEqual(formatMoney(3.1), '$3.10', 'That\'s not formatted the way we expected.');
        });
    });


    describe('fuelPrice', () => {
        it('Return the total fuel cost with a discount', () => {
            assert.strictEqual(fuelPrice(5, 1.23), 5.65);
            assert.strictEqual(fuelPrice(8, 2.5), 18.40);
            assert.strictEqual(fuelPrice(5, 5.6), 27.50);
        });
    });


    describe('basicOp', () => {
        it('Perform an operation of addition, subtraction, multiplication or division between 2 numbers', () => {
            assert.strictEqual(basicOp('+', 4, 7), 11);
            assert.strictEqual(basicOp('-', 15, 18), -3);
            assert.strictEqual(basicOp('*', 5, 5), 25);
            assert.strictEqual(basicOp('/', 49, 7), 7);
        });
    });


    describe('countPositivesSumNegatives', () => {
        it('Return the number of positive numbers and the sum of negative numbers', () => {
            assert.deepStrictEqual(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
            assert.deepStrictEqual(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);
        });
    });


    describe('invert', () => {
        it('Return the inverse of an array of numbers', () => {
            assert.deepStrictEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
            assert.deepStrictEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
            assert.deepStrictEqual(invert([]), []);
            assert.deepStrictEqual(invert([0]), [0]);
        });
    });


    describe('sum', () => {
        it('Return the sum of numbers of an array', () => {
            assert.strictEqual(sum([]), 0);
            assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2);
            assert.strictEqual(sum([-2.398]), -2.398);
        });
    });


    describe('arrayPlusArray', () => {
        it('Returns the sum of 2 arrays of numbers', () => {
            assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
            assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
            assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
            assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
        });
    });


    describe('mango', () => {
        it('For a given quantity and price, return the total cost', () => {
            assert.strictEqual(mango(3, 3), 6);
            assert.strictEqual(mango(9, 5), 30);
        });
    });


    describe('hello', () => {
        it('Return "Hello, Name!" to a first name, or says Hello, World! if the name is not given', () => {
            assert.strictEqual(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
            assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
            assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
            assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )
        });
    });
    


    describe('getAverage', () => {
        it('Return the average of the given array rounded down to its nearest integer', () => {
            assert.strictEqual(getAverage([2,2,2,2]), 2);
            assert.strictEqual(getAverage([1,2,3,4,5,]), 3);
            assert.strictEqual(getAverage([1,1,1,1,1,1,1,2]), 1);
        });
    });
    


    describe('positiveSum', () => {
        it('Returns the sum of all positive numbers', () => {
            assert.strictEqual(positiveSum([1,2,3,4,5]), 15);
            assert.strictEqual(positiveSum([1,-2,3,4,5]), 13);
            assert.strictEqual(positiveSum([]), 0);
            assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]), 0);
            assert.strictEqual(positiveSum([-1,2,3,4,-5]), 9);
        });
    });
    


    describe('makeNegative', () => {
        it('Return a negative number', () => {
            assert.equal(makeNegative(1), -1);
            assert.equal(makeNegative(-5), -5);
            assert.equal(makeNegative(0), 0);
            assert.equal(makeNegative(0.12), -0.12);
        });
    });
});