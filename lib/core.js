'use strict'

module.exports = function simpleDisplay(n) {
  if (typeof n !== 'number' || n < 1 || n > 9) {
    throw new Error('The input must be a number between 1 and 9.')
  }

  if (n === 1) {
    return '1'
  }

  throw new Error('Not implemented yet.')
}
