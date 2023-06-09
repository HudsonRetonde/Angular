"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const Carro_1 = require("./Carro");
class Pessoa {
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
    constructor(nome, carroPreferido) {
        this.nome = '';
        this.carroPreferido = '';
        this.carro = new Carro_1.Carro('', 0, 0);
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
}
exports.Pessoa = Pessoa;
