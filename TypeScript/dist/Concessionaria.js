"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Concessionaria;
