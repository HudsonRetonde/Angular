export interface DaoInterface {
    nomeTabela: string

    inserir(objetc:any): boolean
    atualizar(object: any): boolean
    remover(id: number): any
    slecionar(id:number): any
    selecionarTodos(): [any]
}