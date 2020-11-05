const { test, expect } = require('@jest/globals');
jest.mock = require('./exemplo1');
const service = require('./exemplo1');

beforeEach(() => {
    service.randomNumber = jest.fn().mockReturnValue(2);
    service.randomNumber();    
})

describe('Testando a função que retorna um numero aleatorio' , () => {
    it('deve retornar true ao passar 2 como parametro', () => {
        expect(service.isDivisible(2)).toBe(true)
    })
    test('Testando se o mock funciona', () => {
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1)
        expect(service.randomNumber()).toBe(2);
    })
})