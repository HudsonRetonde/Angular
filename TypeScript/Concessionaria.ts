import { Carro } from "./Carro"
export class Concessionaria {
    private endereco: string =''
    private listaDeCarros: Array<Carro>

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }
    constructor(endereco:string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
}