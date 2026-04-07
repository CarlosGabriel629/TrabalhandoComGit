const readline = require('readline-sync')

let nickname = readline.question('informe o seu nickname')
let jogo = readline.question('informe seu jogo favorito')
let pontos = readline.questionInt('informe a pontuação total')

console.log('========== PERFIL DE JOGADOR ===========')

console.log (`informe o seu nickname  ${nickname}`)

console.log (`informe seu jogo favorito ${jogo}`)

console.log (`informe a pontuação total ${pontos}`)