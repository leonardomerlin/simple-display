'use strict'

const simpleDisplay = require('../lib/core')

describe('SimpleDisplay', () => {
  test('should reject inputs outside of range [1..9]', () => {
    const messageError = 'The input must be a number between 1 and 9.'
    // test limits
    expect(() => {
      simpleDisplay(0)
    }).toThrowError(messageError)
    expect(() => {
      simpleDisplay(10)
    }).toThrowError(messageError)

    // test negative values
    expect(() => {
      simpleDisplay(-1)
    }).toThrowError(messageError)
    expect(() => {
      simpleDisplay(-10)
    }).toThrowError(messageError)
  })

  test('should work with "1"', () => {
    const result = simpleDisplay(1)
    const expected = '1'
    expect(result).toBe(expected)
  })

  test.skip('should work with "2"', () => {})
  test.skip('should work with "3"', () => {})
  test.skip('should work with "4"', () => {})
  test.skip('should work with "5"', () => {})
  test.skip('should work with "6"', () => {})
  test.skip('should work with "7"', () => {})
  test.skip('should work with "8"', () => {})
  test.skip('should work with "9"', () => {})
})
