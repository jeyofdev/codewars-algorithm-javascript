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
const findNb = require('../src/6kyu/11-build_a_pile_of_cubes/findNb');
const createPhoneNumber = require('../src/6kyu/12-create_phone_number/createPhoneNumber');
const isValidWalk = require('../src/6kyu/13-take-a-ten-minute-walk/isValidWalk');
const digitalRoot = require('../src/6kyu/14-sum_of_digits_digital_root/digitalRoot');
const likes = require('../src/6kyu/15-who_likes_it/likes');
const arrayDiff = require('../src/6kyu/16-array_diff/arrayDiff');
const makeSentence = require('../src/6kyu/17-simple-sentences/makeSentence');
const countInversions = require('../src/6kyu/18-calculate-number-of-inversions-in-array/countInversions');
const meeting = require('../src/6kyu/19-meeting/meeting');
const dataReverse = require('../src/6kyu/20-data-reverse/dataReverse');
const partsSums = require('../src/6kyu/21-sums-of-parts/partsSums');
const fibonacci = require('../src/6kyu/22-even-fibonacci-sum/fibonacci');
const solve = require('../src/6kyu/23-simple-sum-of-pairs/solve');
const duplicateCount = require('../src/6kyu/24-counting-duplicates/duplicateCount');
const order = require('../src/6kyu/25-your-order-please/order');
const findMissingLetter = require('../src/6kyu/26-find-the-missing-letter/findMissingLetter');


describe('6kyu', () => {
    describe('findOdd', () => {
        it('Return the odd number that appears most often in an array of numbers', () => {
            assert.strictEqual(
                findOdd([
                    20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
                ]),
                5
            );
            assert.strictEqual(
                findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]),
                -1
            );
            assert.strictEqual(
                findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]),
                5
            );
            assert.strictEqual(findOdd([10]), 10);
            assert.strictEqual(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
            assert.strictEqual(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
        });
    });


    describe('duplicateEncode', () => {
        it('Convert each character of a character string into an opening or closing parenthesis', () => {
            assert.strictEqual(duplicateEncode('din'), '(((');
            assert.strictEqual(duplicateEncode('recede'), '()()()');
            assert.strictEqual(
                duplicateEncode('Success'),
                ')())())',
                'should ignore case'
            );
            assert.strictEqual(duplicateEncode('(( @'), '))((');
        });
    });


    describe('toCamelCase', () => {
        it('Convert string to camel case', () => {
            assert.strictEqual(
                toCamelCase(''),
                '',
                'An empty string was provided but not returned'
            );
            assert.strictEqual(
                toCamelCase('the_stealth_warrior'),
                'theStealthWarrior',
                "toCamelCase('the_stealth_warrior') did not return correct value"
            );
            assert.strictEqual(
                toCamelCase('The-Stealth-Warrior'),
                'TheStealthWarrior',
                "toCamelCase('The-Stealth-Warrior') did not return correct value"
            );
            assert.strictEqual(
                toCamelCase('A-B-C'),
                'ABC',
                "toCamelCase('A-B-C') did not return correct value"
            );
        });
    });

    describe('countSmileys', () => {
        it('Return the number of smileys', () => {
            assert.strictEqual(
                toCamelCase(''),
                '',
                'An empty string was provided but not returned'
            );
            assert.strictEqual(countSmileys([]), 0);
            assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);
            assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
            assert.strictEqual(
                countSmileys([';]', ':[', ';*', ':$', ';-D']),
                1
            );
        });
    });


    describe('comp', () => {
        it('Checks if the two arrays have the same elements, with the same multiplicities', () => {
            arrA = [121, 144, 19, 161, 19, 144, 19, 11];
            arrB = [
                11 * 11,
                121 * 121,
                144 * 144,
                19 * 19,
                161 * 161,
                19 * 19,
                144 * 144,
                19 * 19,
            ];
            assert.strictEqual(comp(arrA, arrB), true);
        });
    });


    describe('longestConsec', () => {
        it('Return the first longest string consisting of k consecutive strings taken in an array', () => {
            assert.strictEqual(
                longestConsec(
                    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
                    2
                ),
                'abigailtheta'
            );
            assert.strictEqual(
                longestConsec(
                    [
                        'ejjjjmmtthh',
                        'zxxuueeg',
                        'aanlljrrrxx',
                        'dqqqaaabbb',
                        'oocccffuucccjjjkkkjyyyeehh',
                    ],
                    1
                ),
                'oocccffuucccjjjkkkjyyyeehh'
            );
            assert.strictEqual(longestConsec([], 3), '');
            assert.strictEqual(
                longestConsec(
                    [
                        'itvayloxrp',
                        'wkppqsztdkmvcuwvereiupccauycnjutlv',
                        'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
                    ],
                    2
                ),
                'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
            );
            assert.strictEqual(
                longestConsec(
                    ['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'],
                    2
                ),
                'wlwsasphmxxowiaxujylentrklctozmymu'
            );
            assert.strictEqual(
                longestConsec(
                    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
                    -2
                ),
                ''
            );
            assert.strictEqual(
                longestConsec(
                    ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
                    3
                ),
                'ixoyx3452zzzzzzzzzzzz'
            );
            assert.strictEqual(
                longestConsec(
                    ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
                    15
                ),
                ''
            );
            assert.strictEqual(
                longestConsec(
                    ['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'],
                    0
                ),
                ''
            );
        });
    });


    describe('inArray', () => {
        it('Return an array sorted r in lexicographical order arrA whose strings are substrings of strings of arrB.', () => {
            a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

            assert.deepStrictEqual(inArray(['xyz', 'live', 'strong'], a2), [
                'live',
                'strong',
            ]);
            assert.deepStrictEqual(inArray(['live', 'strong', 'arp'], a2), [
                'arp',
                'live',
                'strong',
            ]);
            assert.deepStrictEqual(inArray(['tarp', 'mice', 'bull'], a2), []);
        });
    });


    describe('digPow', () => {
        it('Return a positive integer k, if it exists, such that the sum of the digits of n taken to successive powers of p is equal to k * n.', () => {
            assert.strictEqual(digPow(89, 1), 1);
            assert.strictEqual(digPow(92, 1), -1);
            assert.strictEqual(digPow(46288, 3), 51);
        });
    });


    describe('sqInRect', () => {
        it("Return an array with the size of each of the squares of a 'true' rectangle", () => {
            assert.deepStrictEqual(sqInRect(5, 5), null);
            assert.deepStrictEqual(sqInRect(5, 3), [3, 2, 1, 1]);
            assert.deepStrictEqual(sqInRect(3, 5), [3, 2, 1, 1]);
            assert.deepStrictEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
        });
    });


    describe('findNb', () => {
        it('Return the total number of cubes based on the total volume', () => {
            assert.strictEqual(findNb(4183059834009), 2022);
            assert.strictEqual(findNb(24723578342962), -1);
            assert.strictEqual(findNb(135440716410000), 4824);
            assert.strictEqual(findNb(40539911473216), 3568);
            assert.strictEqual(findNb(1071225), 45);
            assert.strictEqual(findNb(91716553919377), -1);
        });
    });


    describe('createPhoneNumber', () => {
        it('Return a number array in the form of a phone number', () => {
            assert.strictEqual(
                createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
                '(123) 456-7890'
            );
            assert.strictEqual(
                createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
                '(111) 111-1111'
            );
            assert.strictEqual(
                createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
                '(123) 456-7890'
            );
        });
    });


    describe('isValidWalk', () => {
        it('Function that returns true if the walk takes exactly ten minutes', () => {
            assert.strictEqual(
                isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
                true
            );
            assert.strictEqual(
                isValidWalk([
                    'w',
                    'e',
                    'w',
                    'e',
                    'w',
                    'e',
                    'w',
                    'e',
                    'w',
                    'e',
                    'w',
                    'e',
                ]),
                false
            );
            assert.strictEqual(isValidWalk(['w']), false);
            assert.strictEqual(
                isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
                false
            );
        });
    });


    describe('digitalRoot', () => {
        it('Return the numeric root of all digits in a number', () => {
            assert.strictEqual(digitalRoot(16), 7);
            assert.strictEqual(digitalRoot(456), 6);
        });
    });


    describe('likes', () => {
        it('Return the first names of an array as a string', () => {
            assert.strictEqual(likes([]), 'no one likes this');
            assert.strictEqual(likes(['Peter']), 'Peter likes this');
            assert.strictEqual(
                likes(['Jacob', 'Alex']),
                'Jacob and Alex like this'
            );
            assert.strictEqual(
                likes(['Max', 'John', 'Mark']),
                'Max, John and Mark like this'
            );
            assert.strictEqual(
                likes(['Alex', 'Jacob', 'Mark', 'Max']),
                'Alex, Jacob and 2 others like this'
            );
        });
    });


    describe('arrayDiff', () => {
        it('Remove all the values from an array a that are present in an array b, keeping their order', () => {
            assert.deepStrictEqual(
                arrayDiff([], [4, 5]),
                [],
                'a was [], b was [4,5]'
            );
            assert.deepStrictEqual(
                arrayDiff([3, 4], [3]),
                [4],
                'a was [3,4], b was [3]'
            );
            assert.deepStrictEqual(
                arrayDiff([1, 8, 2], []),
                [1, 8, 2],
                'a was [1,8,2], b was []'
            );
            assert.deepStrictEqual(
                arrayDiff([1, 2, 3], [1, 2]),
                [3],
                'a was [1,2,3], b was [1,2]'
            );
        });
    });


    describe('makeSentence', () => {
        it('Return a sentence out of the given parts', () => {
            assert.strictEqual(
                makeSentence(['hello', 'world']),
                'hello world.'
            );
        });
    });


    describe('countInversions', () => {
        it('Return The number of inversions that are pairs of elements in the array that are out of order', () => {
            assert.strictEqual(countInversions([]), 0);
            assert.strictEqual(countInversions([1, 2, 3]), 0);
            assert.strictEqual(countInversions([2, 1, 3]), 1);
            assert.strictEqual(countInversions([6, 5, 4, 3, 2, 1]), 15);
            assert.strictEqual(
                countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]),
                30
            );
        });
    });


    describe('meeting', () => {
        it('Return a string uppercase sorted in alphabetical order and by last name', () => {
            assert.strictEqual(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"), 
            "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
            assert.strictEqual(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"), 
            "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
            assert.strictEqual(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"), 
            "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");
        });
    });


    describe('dataReverse', () => {
        it('Return a reverse data stream', () => {
            assert.deepStrictEqual(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]),
            [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
            assert.deepStrictEqual(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]), [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);
        });
    });


    describe('partsSums', () => {
        it('Return the sums of the parts of an array', () => {
            assert.deepStrictEqual(partsSums([]), [0]);
            assert.deepStrictEqual(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]);
            assert.deepStrictEqual(partsSums([1, 2, 3, 4, 5, 6]), [21, 20, 18, 15, 11, 6, 0]);
            assert.deepStrictEqual(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]), 
            [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);
        });
    });


    describe('fibonacci', () => {
        it('Return the sum of all even numbers in the Fibonacci sequence that are less than the given number', () => {
            assert.strictEqual(fibonacci(2147483647), 1485607536);
            assert.strictEqual(fibonacci(1000000000), 350704366);
            assert.strictEqual(fibonacci(100000000), 82790070);
            assert.strictEqual(fibonacci(1000000), 1089154);
            assert.strictEqual(fibonacci(1000), 798);
            assert.strictEqual(fibonacci(100), 44);
            assert.strictEqual(fibonacci(5), 2);
            assert.strictEqual(fibonacci(8), 2);
            assert.strictEqual(fibonacci(10), 10);
            assert.strictEqual(fibonacci(1), 0);
        });
    });


    describe('solve', () => {
        it('Return the digitSum(a) + digitsum(b)', () => {
            assert.strictEqual(solve(18), 18);
            assert.strictEqual(solve(29), 11);
            assert.strictEqual(solve(45), 18);
            assert.strictEqual(solve(1140), 33);
            assert.strictEqual(solve(7019), 35);
        });
    });


    describe('duplicateCount', () => {
        it('Return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string', () => {
            assert.strictEqual(duplicateCount(""), 0);
            assert.strictEqual(duplicateCount("abcde"), 0);
            assert.strictEqual(duplicateCount("aabbcde"), 2);
            assert.strictEqual(duplicateCount("aabBcde"), 2);
            assert.strictEqual(duplicateCount("Indivisibility"), 1)
            assert.strictEqual(duplicateCount("Indivisibilities"), 2)
        });
    });


    describe('order', () => {
        it('Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.', () => {
            assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
            assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
            assert.strictEqual(order(""), "", "empty input should return empty string" )
        });
    });


    describe('findMissingLetter', () => {
        it('Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array', () => {
            assert.strictEqual(findMissingLetter(['a','b','c','d','f']), 'e');
            assert.strictEqual(findMissingLetter(['O','Q','R','S']), 'P');
        });
    });
});
