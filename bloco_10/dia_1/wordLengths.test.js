const { test, expect } = require('@jest/globals');
const wordLengths = require('./wordLengths');

test('Deve retornar o numero de caracteres de cada item passado em um array', () => {
    expect(wordLengths(words)).toEqual(expected);
})

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];