const assert = require('assert');

const greetPeople = (people) => {
  let greetings = [];

  for (const person of people) {
    greetings.push(`Hello ${person}`);
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)
