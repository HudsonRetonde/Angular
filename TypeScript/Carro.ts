import Veiculo from './Veiculo'

export default class Carro extends Veiculo {
    private numeroDePortas: number = 0;

    constructor(modelo:string, numeroDePortas:number, velocidadeMaxima:number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
        this.velocidadeMaxima = velocidadeMaxima
    }    
}