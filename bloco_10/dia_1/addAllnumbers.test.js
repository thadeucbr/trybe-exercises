const { test, expect } = require('@jest/globals');
const addAllnumbers = require('./addAllnumbers');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;

describe('Sum array tests', () => {
    it('should return the sum of array [9, 23, 10, 3, 8] = 53', () => {
        expect(addAllnumbers(numbers)).toEqual(expected);
    })
})

