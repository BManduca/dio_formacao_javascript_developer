const numero = 3

const eNumeroPar = numero % 2
const verifyNumberPar = numero % 2 === 0
const verifyNumberImpar = numero % 2 !== 0

if (eNumeroPar === 0) {
  console.log('O número', numero, 'é par?', verifyNumberPar)
} else {
  console.log('O número', numero, 'é ímpar?', verifyNumberImpar)
}
