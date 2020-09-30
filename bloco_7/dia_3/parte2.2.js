const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
    let result = [];
    for(let index = 0; index < words.length; index += 1){
        result.push(words[index].length);
    }
    return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);