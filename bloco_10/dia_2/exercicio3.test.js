const { findUserById } = require('./exercicio2');
const { expect, it } = require('@jest/globals');

describe('Testing with await/async try/catch', () => {
	it('should return Mark', async () => {
		const name = await findUserById(4);
		expect(name.name).toBe('Mark');
	});
	it('should return error User with 1 not found.', async () => {
		try {
			await findUserById(1);
		} catch (error) {
			expect(error).toEqual({ error: 'User with 1 not found.' });
		}
	});
});
