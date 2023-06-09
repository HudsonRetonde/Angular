"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, numeroDePortas, velocidadeMaxima) {
        this.modelo = "";
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.velocidadeMaxima = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.Carro = Carro;
