const readline= require('readline-sync')

let fret= 100

let semFret= readline.questionFloat('total da compra')

let difereca = semFret-fret 

console.log ( '=========== resultado ==========')

if(fret<semFret){
    console.log('sem frete')
}else{
    console.log(`aproveite o frete ${Math.abs(difereca)}`)
}