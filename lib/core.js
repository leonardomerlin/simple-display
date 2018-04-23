'use strict'

/**
 * Parse the number `n` into a 7-segments display digit.
 *
 * @param {number} n the number between [1..9] to be parsed into display.
 * @param {boolean} extendedVersion if your '7' or '9' must be "extended" (TODO: explain on the docs).
 * @returns {string} the digit on simple (hipster) display format.
 */
module.exports = function simpleDisplay(n, extendedVersion) {
  if (typeof n !== 'number' || n < 1 || n > 9) {
    throw new Error('The input must be a number between 1 and 9.')
  }

  if (n === 1) {
    return '1'
  }

  // considering a 7-segments structure (matrix)
  // _ 0 _
  // 1 _ 2
  // _ 3 _
  // 4 _ 5
  // _ 6 _
  const segments = {
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 0]
  }

  const segment = segments[n]
  const horizontalN = horizontalSegment(n) + '\n'

  // initialize the result holder
  let result = ''

  // START
  // segment 0
  if (segment[0]) {
    result += horizontalN
  }
  // segment 1 and 2
  result += verticalSegment(n, segment[1], segment[2])

  // NOTE: to return the number '7' with double vertical segments on right side,
  //       just call this fuction passing `true` to `extenderVersion` param.
  if (!extendedVersion && n === 7) {
    return result
  }

  // segment 3
  if (segment[3]) {
    result += horizontalN
  }

  // segment 4 and 5
  result += verticalSegment(n, segment[4], segment[5])

  // segment 6
  // NOTE: the number nine can be printed with or without the segment 6 using the flag "extendedVersion"
  if (segment[6] || (extendedVersion && n === 9)) {
    result += horizontalN
  }

  // END

  return result
}

/**
 * Replicates the number `n` on same horizontal line.
 *
 * @param {number} n the number to be printed on the pattern.
 * @returns {string}
 */
function horizontalSegment(n) {
  return `${n}`.repeat(n)
}

/**
 * Replicates the number `n` into columns: left-only, right-only or both (with some space between then).
 *
 * Use this function to fill the number as the following examples:
 *
 * When `verticalSegment(2, true, false)`
 * ```
 * 2
 * 2
 * ```
 *
 * When `verticalSegment(2, false, true)`
 * ```
 *   2
 *   2
 * ```
 *
 * When `verticalSegment(2, true, true)`
 * ```
 * 2 2
 * 2 2
 * ```
 *
 * @param {number} n the number to be printend on the pattern. Required.
 * @param {boolean} fillLeft `true` if the left side must be filled. Required.
 * @param {boolean} fillRight `true` if the right side must be filled. Required.
 * @returns {string} the final string with line breaks.
 */
function verticalSegment(n, fillLeft, fillRight) {
  if (fillLeft && !fillRight) {
    return `${n}\n`.repeat(n)
  }

  if (!fillLeft && fillRight) {
    const spaceMinusOne = ' '.repeat(n - 1)
    return `${spaceMinusOne}${n}\n`.repeat(n)
  }

  if (fillLeft && fillRight) {
    const spaceMinusTwo = ' '.repeat(n - 2)
    return `${n}${spaceMinusTwo}${n}\n`.repeat(n)
  }

  throw new Error('Wrong a,b params.')
}
