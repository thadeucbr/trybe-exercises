const { test, expect } = require('@jest/globals');
const addOne = require('./addOne');

describe('Add one to array', () => {
    it('should add 1 to each number of an array', () => {
        expect(addOne([1, 2, 3])).toEqual([2, 3, 4]);
    })
})
