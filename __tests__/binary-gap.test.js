/* eslint-disable no-useless-escape */
const binaryGap = require('../index')

const testCases = [
    [15, 0],
    [32, 0],
    [1041, 5],
    [1, 0],
    [5, 1],
    [6, 0],
    [328, 2],
    [16, 0],
    [1024, 0],
    [9, 2],
    [11, 1],
    [19, 2],
    [42, 1],
    [1162, 3],
    [51712, 2],
    [20, 1],
    [561892, 3],
    [66561, 9],
    [6291457, 20],
    [74901729, 4],
    [805306373, 25],
    [1376796946, 5],
    [1073741825, 29],
    [1610612737, 28],
];

describe('match given date range for each test case', () => {
    test.each(testCases)(
        `given %d to be analysed, 
    should find %d of binary gap`,
        (N, gap) => {
            expect(binaryGap(N)).toBe(gap);
        }
    );


});
