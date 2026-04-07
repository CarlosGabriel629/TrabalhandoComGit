const readline = require('readline-sync')

let horas = 400

let horasEstudadas = readline.questionFloat('informe as horas estudadas')

let  diferenca = horas - horasEstudadas

console.log('======== RESULTADO ========')

if(horas >= horasEstudadas){
console.log('parabens vc estudou bem')
}else{
    console.log(`faltam ${diferenca} para bater as horas estudadas `)
}