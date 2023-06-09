export class Carro {
    private modelo: string = "";
    private numeroDePortas: number = 0;
    private velocidade: number = 0;
    private velocidadeMaxima: number = 0;

    constructor(modelo:string, numeroDePortas:number, velocidadeMaxima:number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
        this.velocidadeMaxima = velocidadeMaxima
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}