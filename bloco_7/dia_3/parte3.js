const assert = require("assert");

const greetPeople = (people) => {
    const greeting = 'Hello ';
    let result = [];
    for (const person in people) {
      result.push(greeting + people[person]);
    }
    return result;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(greetPeople(parameter),result)