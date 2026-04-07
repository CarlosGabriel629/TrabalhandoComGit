const readline = require('readline-sync')

let objetivo =  500

let dinheiroGuardado=readline.questionFloat('informe o valor guardado')

let diferenca = objetivo - dinheiroGuardado

console.log('========= RESULTADO ==========')

if(diferenca >= objetivo){
console.log('parabens!! voce atingiu a meta')

}else{
    console.log(`faltam ${diferenca} para atingir o objetivo `)
}
