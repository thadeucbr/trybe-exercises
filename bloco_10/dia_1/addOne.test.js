const { test, expect } = require('@jest/globals');
const addOne = require('./addOne');

test('Somar 1 a cada item do array', () => {
    expect(addOne([1, 2, 3])).toEqual([2, 3, 4]);
})