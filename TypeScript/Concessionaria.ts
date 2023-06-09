import { ConcessionariaInterface } from "./ConcessionariaIntercafe"
import Carro from "./Carro"

export default class Concessionaria implements ConcessionariaInterface {
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
    
    public fornecerHoraruiDeFuncionamento():string {
        return 'De segunda a sexta das 08:00 às 18:00 e sábado das 08:00 às 12:00'
    }
}