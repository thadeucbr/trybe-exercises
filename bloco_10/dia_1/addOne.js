const addOne = (array) => {
    let total = [];
    array.forEach((number) => {
        total.push(number + 1);
    })
    return total
};

/* const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged); */
module.exports = addOne;