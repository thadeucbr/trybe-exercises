const exemplo1 = require('../dia_3/exemplo1');
const {getRepos} = require('./exercicio4');
const { expect, it } = require('@jest/globals');
const fetch = require('node-fetch');

it('gets a list of repositories names', () => {
    const url = 'https://api.github.com/users/tryber/repos';
  
    return getRepos(url).then(result => {
      expect(result).toContain('challenge-bug-hunting-youtrybe-squad-1');
      expect(result).toContain('sd-00-block5-project-pixels-art');
    });
  });