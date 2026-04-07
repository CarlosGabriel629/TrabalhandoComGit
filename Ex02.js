const readline = require('readline-sync')
let nome = readline.question('informe seu nome')
let nomeDoPrato = readline.question('informe o nome do prato')
let valorDoPrato = readline.questionFloat("informe o valor do prato")

console.log("============== RESUMO DO PEDIDO ===================")
console.log(`informe seu nome ${nome}`)
console.log(`informe o nome do prato ${nomeDoPrato}`)
console.log(`informe o valor do prato ${valorDoPrato}`)