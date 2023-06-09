"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(objetc) {
        console.log('lógica de insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica update');
        return true;
    }
    remover(id) {
        console.log('lógica delete');
        return Object();
    }
    slecionar(id) {
        console.log('lógica select');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [Object()];
    }
}
exports.Dao = Dao;
