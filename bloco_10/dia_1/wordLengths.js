const wordLengths = (array) => {
    let length = []
    array.forEach((item) => {
        length.push(item.length);
    })
    return length;
}

module.exports = wordLengths;