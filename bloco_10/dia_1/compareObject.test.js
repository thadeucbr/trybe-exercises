const { test, expect } = require('@jest/globals');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare objects', () => {
  test('Obj1 should be equal to Obj2', () => {
    expect(obj1).toEqual(obj2);
})

test('Obj1 must be different to Obj3', () => {
    expect(obj2).not.toEqual(obj3);
})

})
