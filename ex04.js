const readline = require('readline-sync')

let meta= 10000

let passos =readline.questionInt('readline-sync')('quantos passos voce deu?')

let deferenca= meta - passos 

console.log('======== RESULTADO ===========')

if(passos >= meta){
    console.log('parabens voce atingiu a meta')
    console.log(`voce passou ${Math.abs(deferenca)}passos da sua meta`)
}else{
    console.log(`faltam ${deferenca} para bater a meta`)
}




