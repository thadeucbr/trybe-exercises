const { expect, it } = require('@jest/globals');
const { findUserById } = require('./exercicio2');

describe('Testing find user', () => {
	it('should return the correct id when passing 15 as argument', async () => {
		expect.assertions(1);
		const response = await findUserById(4);
		expect(response.name).toBe('Mark');
	});

	it('should return error', async done => {
		expect.assertions(1);
		expect(findUserById(2)).rejects.toEqual({
			error: 'User with 2 not found.',
		});
		done();
	});
});
