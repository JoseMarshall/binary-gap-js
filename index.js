/**
 * @description Given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
 * @param {number} N The number to be analysed
 * @returns maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
 */
function binaryGap(N) {
    try {
        const cases = N.toString(2).replace(/1/g, '11').match(/10+1/g)
        const binaryGap = (cases?.reduce((max, cur) => {
            if (cur.length > max) max = cur.length
            return max
        }, 0) ?? 2) - 2
        return binaryGap
    } catch (error) {
        return 0
    }
}

module.exports = binaryGap