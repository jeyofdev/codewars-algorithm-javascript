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
const mergeArrays = require('../src/7kyu/14-merge-two-arrays/mergeArrays');
const repeats = require('../src/7kyu/15-sum_of_array_singles/repeats');
const filterString = require('../src/7kyu/16-filter_the_number/filterString');
const splitInParts = require('../src/7kyu/17-split_in_parts/splitInParts');
const highAndLow = require('../src/7kyu/18-highest_and_owest/highAndLow');
const descendingOrder = require('../src/7kyu/19-descending_order/descendingOrder');
const filterList = require('../src/7kyu/20-list_filtering/filterList');
const isIsogram = require('../src/7kyu/21-isograms/isIsogram');
const findShort = require('../src/7kyu/22-shortest-word/findShort');
const number = require('../src/7kyu/23-number_of_people_in_the_bus/number');
const reverseWords = require('../src/7kyu/24-reverse_words/reverseWords');
const oddOrEven = require('../src/7kyu/25-odd_or_even/oddOrEven');
const stringEndsWith = require('../src/7kyu/26-string_ends_with/stringEndsWith');
const removeSmallest = require('../src/7kyu/27-remove_the_minimum/removeSmallest');
const stray = require('../src/7kyu/28-find_the_stray_number/stray');
const openOrSenior = require('../src/7kyu/29-categorize_new_member/openOrSenior');
const friend = require('../src/7kyu/30-friend_or_foe/friend');
const sortByLength = require('../src/7kyu/31-sort_array_by_string_length/sortByLength');
const checkExam = require('../src/7kyu/32-check_the_exam/checkExam');
const isSortedAndHow = require('../src/7kyu/33-sorted_yes_no_how/isSortedAndHow');
const myLanguages = require('../src/7kyu/34-my_languages/myLanguages');
const sumEvenNumbers = require('../src/7kyu/35-sum_even_numbers/sumEvenNumbers');
const evenLast = require('../src/7kyu/36-evens-times-last/evenLast');



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


    describe("splitInParts", () => {
        it("Split a given string into different strings of equal size", () => {
            assert.strictEqual(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
            assert.strictEqual(splitInParts("HelloKata", 1), "H e l l o K a t a")
            assert.strictEqual(splitInParts("HelloKata", 9), "HelloKata")
        });
    });


    describe("highAndLow", () => {
        it("Return the highest and lowest number from a list of numbers from a string", () => {
            assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9"); 
        });
    });


    describe("descendingOrder", () => {
        it("Return the digits of a number in descending order", () => {
            assert.strictEqual(descendingOrder(0), 0)
            assert.strictEqual(descendingOrder(1), 1)
            assert.strictEqual(descendingOrder(111), 111)
            assert.strictEqual(descendingOrder(15), 51)
            assert.strictEqual(descendingOrder(1021), 2110)
            assert.strictEqual(descendingOrder(123456789), 987654321)
        });
    });


    describe("isIsogram", () => {
        it("Check if a string contains only letters is an isogram", () => {
            assert.strictEqual(isIsogram("Dermatoglyphics"), true );
            assert.strictEqual(isIsogram("isogram"), true );
            assert.strictEqual(isIsogram("aba"), false, "same chars may not be adjacent" );
            assert.strictEqual(isIsogram("moOse"), false, "same chars may not be same case" );
            assert.strictEqual(isIsogram("isIsogram"), false );
            assert.strictEqual(isIsogram(""), true, "an empty string is a valid isogram" );
        });
    });


    describe("findShort", () => {
        it("Return the length of the shortest word(s)", () => {
            assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
            assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
            assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
        });
    });


    describe("number", () => {
        it("Return the number of people who are still on the bus after the last bus station (after the last array)", () => {
            assert.strictEqual(number([[10,0],[3,5],[5,8]]), 5);
            assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), 17);
            assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), 21);
            assert.strictEqual(number([[0,0]]), 0);
        });
    });


    describe("reverseWords", () => {
        it("Return a string with every word reversed", () => {
            assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
            assert.strictEqual(reverseWords('apple'), 'elppa');
            assert.strictEqual(reverseWords('a b c d'), 'a b c d');
            assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
        });
    });


    describe("oddOrEven", () => {
        it("Return if the sum of elements of an array is odd or even", () => {
            assert.strictEqual(oddOrEven([0]), 'even');
            assert.strictEqual(oddOrEven([1]), 'odd');
            assert.strictEqual(oddOrEven([]), 'even');
            assert.strictEqual(oddOrEven([0, 1, 5]), 'even');
            assert.strictEqual(oddOrEven([0, 1, 3]), 'even');
            assert.strictEqual(oddOrEven([1023, 1, 2]), 'even');
            assert.strictEqual(oddOrEven([0, -1, -5]), 'even');
            assert.strictEqual(oddOrEven([0, -1, -3]), 'even');
            assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even');
            assert.strictEqual(oddOrEven([0, 1, 2]), 'odd');
            assert.strictEqual(oddOrEven([0, 1, 4]), 'odd');
            assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd');
            assert.strictEqual(oddOrEven([0, -1, 2]), 'odd');
            assert.strictEqual(oddOrEven([0, 1, -4]), 'odd');
            assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd');
        });
    });


    describe("stringEndsWith", () => {
        it("Check that the first argument passed ends with the 2nd argument", () => {
            assert.strictEqual(stringEndsWith('abcde', 'cde'), true);
            assert.strictEqual(stringEndsWith('abcde', 'abc'), false);      
        });
    });


    describe("removeSmallest", () => {
        it("Remove the smallest number from an array", () => {
            assert.deepStrictEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
            assert.deepStrictEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
            assert.deepStrictEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
            assert.deepStrictEqual(removeSmallest([]), [], "Wrong result for []");

            for (let i = 0; i < 10; ++i) {
                let x = ~~(Math.random() * 400);
                assert.deepStrictEqual(removeSmallest([x]), [], `Wrong result for ${[x]}`);
            }

            function randomArray(length) {
                return Array.from({length: length}, () => ~~(Math.random() * 400));
            }

            for(let i = 0; i < 10; ++i) {
                let arr = randomArray(~~(Math.random() * 10) + 1);
                let l = arr.length;
                assert.deepStrictEqual(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
            }
        });
    });


    describe("stray", () => {
        it("Return the unique number of an array", () => {
            assert.strictEqual(stray([1, 1, 2]), 2);
            assert.strictEqual(stray([17, 17, 3, 17, 17, 17, 17]), 3);
        });
    });


    describe("openOrSenior", () => {
        it("Check if a user has a senior or open membership", () => {
            assert.deepStrictEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);
            assert.deepStrictEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open']);
            assert.deepStrictEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open']);
        });
    });


    describe("friend", () => {
        it("Filter an array of strings and return a list containing only the name of your friends", () => {
            assert.deepStrictEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
            assert.deepStrictEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
            assert.deepStrictEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
            assert.deepStrictEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
        });
    });


    describe("sortByLength", () => {
        it("Return a sorted array containing the ordered strings by the number of characters", () => {
            assert.deepStrictEqual(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
            assert.deepStrictEqual(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
            assert.deepStrictEqual(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
        });
    });


    describe("checkExam", () => {
        it("Return the student's score by comparing their answers with the correct answers", () => {
            assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
            assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
            assert.strictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
            assert.strictEqual(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);
        });
    });


    describe("isSortedAndHow", () => {
        it("Return if the elements of an array are sorted", () => {
            assert.strictEqual(isSortedAndHow([1, 2]), 'yes, ascending');
            assert.strictEqual(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
            assert.strictEqual(isSortedAndHow([4, 2, 30]), 'no');
        });
    });


    describe("myLanguages", () => {
        it("Return in descending order the list of languages for which the score is at least 60", () => {
            assert.deepStrictEqual(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"]);
            assert.deepStrictEqual(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"]);
            assert.deepStrictEqual(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), []);
        });
    });


    describe("sumEvenNumbers", () => {
        it("Return sum of even values", () => {
            assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
        });
    });


    describe("evenLast", () => {
        it("Returns the sum of all integers with an even subscript, multiplied by the integer of the last subscript", () => {
            assert.strictEqual(evenLast([2, 3, 4, 5]), 30);
        });
    });
});