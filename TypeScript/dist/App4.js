"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConcessionariaDao_1 = require("./ConcessionariaDao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const PessoaDao_1 = require("./PessoaDao");
const Pessoa_1 = __importDefault(require("./Pessoa"));
let dao = new ConcessionariaDao_1.ConcessionariaDao();
let concessuonaria = new Concessionaria_1.default('', []);
dao.inserir(concessuonaria);
let dao2 = new PessoaDao_1.PessoaDao();
let pessoa = new Pessoa_1.default('', '');
