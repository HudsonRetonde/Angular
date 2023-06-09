"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = require("./Concessionaria");
const Pessoa_1 = require("./Pessoa");
const Carro_1 = require("./Carro");
// let pessoa = new Pessoa("Juvenal", "Fusca")
// console.log("O cliente se chama " + pessoa.dizerNome() + " e o seu carro prederifo é o " + pessoa.dizerCarroPreferido() + 
// ".")
/* --- criar carros --- */
let carroA = new Carro_1.Carro('Dodge Journey', 4, 300);
let carroB = new Carro_1.Carro('Nissan Kicks', 4, 200);
let carroC = new Carro_1.Carro('Fiat Stilo', 4, 250);
/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.Concessionaria('Avenida Beira Rio', listaDeCarros);
/*Exibir a lista de carros*/
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar o carro --- */
let cliente = new Pessoa_1.Pessoa('João', 'Veloster');
let cliente2 = new Pessoa_1.Pessoa('Joaquim', 'Fiat Stilo');
//console.log(cliente.dizerCarroPreferido())
//console.log(cliente2.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente2.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
console.log(cliente2.dizerCarroQueTem());
