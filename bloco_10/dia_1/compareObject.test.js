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

test('Obj1 deve ser igual ao Obj2', () => {
    expect(obj1).toEqual(obj2);
})

test('Obj1 deve ser diferente do Obj3', () => {
    expect(obj2).not.toEqual(obj3);
})