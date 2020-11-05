const randomNumber = () => (Math.random()*100).toFixed()

const isDivisible = (number) => (randomNumber() % number) === 0

module.exports = { randomNumber, isDivisible }