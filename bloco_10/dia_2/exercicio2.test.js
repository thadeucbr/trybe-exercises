const { expect, it } = require('@jest/globals');
const { rejects } = require('assert');
const { findRepos } = require('jest-changed-files');
const { describe } = require('yargs');
const { findUserById, getUserName } = require('./exercicio2');

    it('should return the correct id when passing 15 as argument', () => {
      expect.assertions(1);
      return findUserById(4)
        .then((response) => {
          expect(response.name).toBe('Mark');
        });
    });

it('should return error', async (done) => {
        expect.assertions(1);
        expect(findUserById(2)).rejects.toEqual({"error": "User with 2 not found."});
        done()
})
