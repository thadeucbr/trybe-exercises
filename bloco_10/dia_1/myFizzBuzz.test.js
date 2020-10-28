const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const myFizzBuss = require('./myFizzBuzz');

test('O numero divisivel por 3 e 5 deve retornar "fizzbuzz"', () => {
    expect(myFizzBuss(15)).toEqual('fizzbuzz');
});

test('O numero divisivel por 3 deve retornar "fizz"', () => {
    expect(myFizzBuss(3)).toEqual('fizz');
});

test('O numero divisivel por 5 deve retornar "buzz"', () => {
    expect(myFizzBuss(5)).toBe('buzz');
});

test('O numero não divisivel por 3 ou 5 deve retornar ele mesmo', () => {
    expect(myFizzBuss(4)).toBe(4);
});

test('Caso seja passado algo alem de um numero deve retornar false', () => {
    expect(myFizzBuss('4')).toBe(false);
});