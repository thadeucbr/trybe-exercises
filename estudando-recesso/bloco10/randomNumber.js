const randomNumber = () => {return( parseInt(Math.random() * 101))}
const randomNumber1 = () => {
  const a = Math.random() * 101
  return( parseInt(Math.random() * 101))
}
const isDivisible = (number) => (randomNumber() % number) === 0
let valores=[];
for (let index = 0; index < 102; index++) {
  valores.push(0)
}
for (let index = 0; index < 10000000000; index++) {
  // if (randomNumber() === 0) i++;
  const sorteado = randomNumber();
  // console.log(sorteado)
  valores[(sorteado)] += 1
}
for (let index = 0; index < 102; index++) {
  console.log(`${index} - sorteado ${valores[index]} vezes`)
}