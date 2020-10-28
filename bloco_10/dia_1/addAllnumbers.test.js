const { test, expect } = require('@jest/globals');
const addAllnumbers = require('./addAllnumbers');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;

test('A função deve somar todos os itens do array e retornar apenas um numero', () => {
    expect(addAllnumbers(numbers)).toEqual(expected);
})