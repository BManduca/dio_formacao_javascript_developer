/*

Faça um programa para calcular o valor de uma viagem

- É preciso de 3 informações:
    1. Preço do combustível
    2. Gasto médio de combustível do carro por KM
    3. Distância em KM da viagem
*/

// declaracao variaveis viagem
const precoCombustivel = 5.75
const kilometrosPorLitro = 10
const distanciaViagemEmKm = 100

// calculos
const quantKmPorLitro = distanciaViagemEmKm / kilometrosPorLitro
const valorGastoViagem = quantKmPorLitro * precoCombustivel

console.log('O valor da viagem foi de R$', valorGastoViagem.toFixed(2))
