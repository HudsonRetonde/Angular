"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Moto_1 = __importDefault(require("./Moto"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let carro = new Carro_1.default("Velost", 3, 300);
let moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
moto.acelerar();
let concessionaria = new Concessionaria_1.default('', []);
console.log(moto);
carro.acelerar();
console.log(carro);
console.log(concessionaria.fornecerHoraruiDeFuncionamento());
