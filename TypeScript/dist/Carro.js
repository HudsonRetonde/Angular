"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Carro extends Veiculo_1.default {
    constructor(modelo, numeroDePortas, velocidadeMaxima) {
        super();
        this.numeroDePortas = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidadeMaxima = velocidadeMaxima;
    }
}
exports.default = Carro;
