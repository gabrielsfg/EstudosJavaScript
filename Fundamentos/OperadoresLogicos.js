function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //se um deles for verdade ira comprar sorvete
    const comprarTv50 = trabalho1 && trabalho2 // se os 2 forem v ira comprar a tv50
    const comprarTv32 = trabalho1 != trabalho2 // se 1 deles forem vdd ira comprar tv32 (ou exclusivo)
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Ele ira retornar um objeto (forma reduzida de um objeto)
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
