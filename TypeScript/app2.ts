import { Concessionaria } from './Concessionaria';
import { Pessoa } from './Pessoa';
import { Carro } from "./Carro";

// let pessoa = new Pessoa("Juvenal", "Fusca")
// console.log("O cliente se chama " + pessoa.dizerNome() + " e o seu carro prederifo é o " + pessoa.dizerCarroPreferido() + 
// ".")

/* --- criar carros --- */

let carroA = new Carro('Dodge Journey', 4, 300)
let carroB = new Carro('Nissan Kicks', 4, 200)
let carroC = new Carro('Fiat Stilo', 4, 250)

/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Avenida Beira Rio', listaDeCarros)

/*Exibir a lista de carros*/

//console.log(concessionaria.mostrarListaDeCarros())

/* --- Comprar o carro --- */
let cliente = new Pessoa('João', 'Veloster')
let cliente2 = new Pessoa('Joaquim', 'Fiat Stilo')

//console.log(cliente.dizerCarroPreferido())
//console.log(cliente2.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro:Carro)=> {
   if(carro['modelo'] == cliente.dizerCarroPreferido()){
    //comprar o carro
    cliente2.comprarCarro(carro)
   
}})
console.log(cliente.dizerCarroQueTem())
console.log(cliente2.dizerCarroQueTem())