const readline = require('readline-sync')

let idade = 18

let maiorIdade = readline.questionFloat('informe sua idade')

let  diferenca = idade - maiorIdade

console.log('======== RESULTADO ========')

if(idade > maiorIdade){
console.log('acesso liberado !!!')
}else{
    console.log(`nao liberado, faltam ${Math.abs(diferenca)} anos  `)
}