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

  test('should work with "2"', () => {
    const result = simpleDisplay(2)
    const expected = [
    '22',
    ' 2',
    ' 2',
    '22',
    '2',
    '2',
    '22',
    ''].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "3"', () => {
    const result = simpleDisplay(3)
    const expected = [
      '333',
      '  3',
      '  3',
      '  3',
      '333',
      '  3',
      '  3',
      '  3',
      '333',
      ''
    ].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "4"', () => {
    const result = simpleDisplay(4)
    const expected = [
      '4  4',
      '4  4',
      '4  4',
      '4  4',
      '4444',
      '   4',
      '   4',
      '   4',
      '   4',
      ''
    ].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "5"', () => {
    const result = simpleDisplay(5)
    const expected = [
      '55555',
      '5',
      '5',
      '5',
      '5',
      '5',
      '55555',
      '    5',
      '    5',
      '    5',
      '    5',
      '    5',
      '55555',
      ''
    ].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "6"', () => {
    const result = simpleDisplay(6)
    const expected = [
      '666666',
      '6',
      '6',
      '6',
      '6',
      '6',
      '6',
      '666666',
      '6    6',
      '6    6',
      '6    6',
      '6    6',
      '6    6',
      '6    6',
      '666666',
      ''
    ].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "7"', () => {
    const expected = [
      '7777777',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      ''
    ].join('\n')
    expect(simpleDisplay(7)).toBe(expected)

    const expected_extended = [
      '7777777',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      '      7',
      ''
    ].join('\n')
    expect(simpleDisplay(7, true)).toBe(expected_extended)
  })

  test('should work with "8"', () => {
    const result = simpleDisplay(8)
    const expected = [
      '88888888',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '88888888',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '8      8',
      '88888888',
      ''
    ].join('\n')
    expect(result).toBe(expected)
  })

  test('should work with "9"', () => {
    const expected = [
      '999999999',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '999999999',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      ''
    ].join('\n')
    expect(simpleDisplay(9)).toBe(expected)

    const expected_extended = [
      '999999999',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '9       9',
      '999999999',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '        9',
      '999999999',
      ''
    ].join('\n')
    expect(simpleDisplay(9, true)).toBe(expected_extended)
  })
})
