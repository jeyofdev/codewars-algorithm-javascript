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
const makeNegative = require('../src/8kyu/20-return_negative/makeNegative');
const solution = require('../src/8kyu/21-reversed_string/solution');
const summation = require('../src/8kyu/22-grasshopper_summation/summation');
const noSpace = require('../src/8kyu/23-remove_string_spaces/noSpace');
const SmallestIntegerFinder = require('../src/8kyu/24-find_the_smallest_integer_in_the_array/SmallestIntegerFinder');
const numberToString = require('../src/8kyu/25-convert_a_number_to_a_string/numberToString');
const countSheeps = require('../src/8kyu/26-counting_sheep/countSheeps');
const isDivisible = require('../src/8kyu/27-Is_n_divisible_by_x_and_y/isDivisible');
const digitize = require('../src/8kyu/28-convert_number_to_reversed_array_of_digits/digitize');
const abbrevName = require('../src/8kyu/29-abbreviate_a_two_word_name/abbrevName');
const shortenToDate = require('../src/8kyu/30-remove_the_time/shortenToDate');
const isToday = require('../src/8kyu/31-is_the_date_today/isToday');
const squareSum = require('../src/8kyu/32-square_sum/squareSum');
const countBy = require('../src/8kyu/33-count_by_x/countBy');
const points = require('../src/8kyu/34-total_amout_of_points/points');
const grow = require('../src/8kyu/35-beginner_reduce-but-grow/grow');


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


    describe('solution', () => {
        it('Reverse a string', () => {
            assert.strictEqual(solution('world'), 'dlrow');
            assert.strictEqual(solution('hello'), 'olleh');
            assert.strictEqual(solution(''), '');
            assert.strictEqual(solution('h'), 'h');
        });
    });


    describe('summation', () => {
        it('Return the summation of every number from 1 to num', () => {
            assert.strictEqual(summation(1), 1);
            assert.strictEqual(summation(8), 36);
        });
    });


    describe('noSpace', () => {
        it('Remove the spaces from the string', () => {
            assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
            assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
            assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
        });
    });


    describe('SmallestIntegerFinder', () => {
        let sif = new SmallestIntegerFinder();

        it('Return the smallest integer', () => {
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]), 8, 'Should return the smallest int 8');
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]), 12, 'Should return the smallest int 12');
            assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]), 56, 'Should return the smallest int 56');
            assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]), 0, 'Should return the smallest int 0');
            assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]), 1, 'Should return the smallest int 1');
        });
    });


    describe('numberToString', () => {
        it('Convert a Number to a String', () => {
            assert.strictEqual(numberToString(67), '67');
            assert.strictEqual(numberToString(123), '123');
            assert.strictEqual(numberToString(999), '999');
        });
    });


    describe('countSheeps', () => {
        const array1 = [
            true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true 
        ];
            
        it('Return the number of times true is present in the array', () => {
            assert.strictEqual(countSheeps(array1), 17, "There are 17 sheeps in total");
        });
    });


    describe('isDivisible', () => {
        it('Check if a number n is divisible by two numbers x AND y', () => {
            assert.strictEqual(isDivisible(3,3,4), false);
            assert.strictEqual(isDivisible(12,3,4), true);
            assert.strictEqual(isDivisible(8,3,4), false);
            assert.strictEqual(isDivisible(48,3,4), true);
        });
    });


    describe('digitize', () => {
        it('Return the digits of a number n in an array in reverse order', () => {
            assert.deepStrictEqual(digitize(35231), [1,3,2,5,3]);
            assert.deepStrictEqual(digitize(348597), [7,9,5,8,4,3]);
        });
    });


    describe('abbrevName', () => {
        it('Convert a name to initials', () => {
            assert.strictEqual(abbrevName("Sam Harris"), "S.H");
            assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
            assert.strictEqual(abbrevName("Evan Cole"), "E.C");
            assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
            assert.strictEqual(abbrevName("David Mendieta"), "D.M");
        });
    });


    describe('shortenToDate', () => {
        it('Return a date in abbreviated format', () => {
            assert.strictEqual(shortenToDate("Friday May 2, 9am"), "Friday May 2");
            assert.strictEqual(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
            assert.strictEqual(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
        });
    });


    describe('isToday', () => {
        it('Return a Boolean value indicating whether the date is today or not', () => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            assert.strictEqual(isToday(new Date()), true);
            assert.strictEqual(isToday(tomorrow), false);
            assert.strictEqual(isToday(yesterday), false);
        });
    });


    describe('squareSum', () => {
        it('Return the sum of each square of a number', () => {
            assert.strictEqual(squareSum([1, 2]), 5);
            assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
        });
    });


    describe('countBy', () => {
        it('Return an array of the first (n) multiples of (x)', () => {
            assert.deepEqual(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            assert.deepEqual(countBy(2, 5), [2, 4, 6, 8, 10]);
        });
    });


    describe('points', () => {
        it('Returns the total number of points based on the results', () => {
            assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]), 30);
            assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]), 10);
            assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]), 0);
            assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]), 15);
            assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]), 12);
        });
    });


    describe('grow', () => {
        it('Return the result of multiplying values in order', () => {
            assert.strictEqual(grow([1, 2, 3]), 6);
            assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
            assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
        });
    });
});