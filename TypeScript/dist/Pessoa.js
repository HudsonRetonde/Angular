"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
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
        this.carro = new Carro_1.default('', 0, 0);
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
}
exports.default = Pessoa;
