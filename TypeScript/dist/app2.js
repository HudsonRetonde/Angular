"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Carro_1 = __importDefault(require("./Carro"));
// let pessoa = new Pessoa("Juvenal", "Fusca")
// console.log("O cliente se chama " + pessoa.dizerNome() + " e o seu carro prederifo é o " + pessoa.dizerCarroPreferido() + 
// ".")
/* --- criar carros --- */
let carroA = new Carro_1.default('Dodge Journey', 4, 300);
let carroB = new Carro_1.default('Nissan Kicks', 4, 200);
let carroC = new Carro_1.default('Fiat Stilo', 4, 250);
/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Avenida Beira Rio', listaDeCarros);
/*Exibir a lista de carros*/
//console.log(concessionaria.mostrarListaDeCarros())
/* --- Comprar o carro --- */
let cliente = new Pessoa_1.default('João', 'Veloster');
let cliente2 = new Pessoa_1.default('Joaquim', 'Fiat Stilo');
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
