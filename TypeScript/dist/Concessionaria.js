"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
class Concessionaria {
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    constructor(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
}
exports.Concessionaria = Concessionaria;
