const readline = require('readline-sync')

let nota = 7

let notaFinal = readline.questionFloat('informe a nota do aluno')

let  diferenca = nota - notaFinal

console.log('======== RESULTADO ========')

if(nota > notaFinal){
console.log('parabens vcfoi aorovado')
}else{
    console.log(`faltam ${diferenca} para bater a nota final reprovado`)
}